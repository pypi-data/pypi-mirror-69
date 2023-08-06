import asyncio
import logging
import time

import click
import jmespath
from jmespath import exceptions, functions

from graviteeio_cli.graviteeio.client.apim.api_async import ApiClientAsync
from graviteeio_cli.graviteeio.modules import GraviteeioModule
from graviteeio_cli.graviteeio.output import OutputFormatType

from ....exeptions import GraviteeioError

logger = logging.getLogger("command-ps")

@click.command()
#@click.option('--deploy-state', help='show if API configuration is synchronized', is_flag=True)
@click.option('--output', '-o', 
              default="table",
              help='Set the format for printing command output resources.', show_default=True,
              type=click.Choice(OutputFormatType.list_name(), case_sensitive=False))
@click.option('-q','--query',
               help='Execute JMESPath query. Some function styles are available for the output format `table. `style_synchronized()` for value `is_synchronized`, `style_state()` for value `state`, `style_workflow_state()` for value `workflow_state`' )
@click.pass_obj
def ls(obj, output, query):
    """
Displays the list od API

\b
API Field:

- `id`: string 
- `name`: string
- `version`: string
- `description`: string
- `visibility`: enum `public`, `private``
- `state`: enum `initialized`, `stopped`, `started`, `closed`
- `labels`: string array
- `manageable`: boolean
- `numberOfRatings`: num
- `tags` :string array
- `created_at`: unix time
- `updated_at:` unix time
- `owner`:
    - `id`: string
    - `displayName`: string
- `picture_url`: string url
- `virtual_hosts`: array
    - `host`: string
    - `path`: string
    - `overrideEntrypoint`: boolean
- `lifecycle_state`: enum `created`, `published`, `unpublished`, `deprecated`, `archived`
- `workflow_state`: enum `draft`, ìn_review`, `request_for_changes`, `review_ok`
- `is_synchronized`: boolean
    """

    async def get_apis():
        client =  ApiClientAsync(obj['config'])
        apis = await client.get_apis_with_state()
        return apis
    # try: 
    loop = asyncio.get_event_loop()
    apis = loop.run_until_complete(get_apis())

    # except Exception:
    #     logging.exception("get apis")
    #     raise GraviteeioError("get apis")
    # api_client = obj['api_client']
    # apis = api_client.get()
    # for api in apis:
    #     api_client.state(api["id"])

    logger.debug("apis response: {}".format(apis))

    if not apis and len(apis) <=0:
        click.echo("No Api(s) found ")
    
    outputFormatType = OutputFormatType.value_of(output)
    if not query:
        if outputFormatType.TABLE == outputFormatType:
            query="[].{Id: id, Name: name, Tags: style_tags(tags), Synchronized: style_synchronized(is_synchronized), Status: style_state(state), Workflow: style_workflow_state(workflow_state)}"
        else:
            query="[].{Id: id, Name: name, Tags: tags, Synchronized: is_synchronized, Status: state, Workflow: workflow_state}"
        
    class CustomFunctions(functions.Functions):
    #options= jmespath.Options()
        @functions.signature({'types': ['string']})
        def _func_style_state(self, state):
            state_color = 'red';
            if state == 'started':
                state_color = 'green'
            return click.style(state.upper(), fg=state_color)
        
        @functions.signature({'types': []})
        def _func_style_workflow_state(self, workflow_state):
            if workflow_state:
                return click.style(workflow_state.upper(), fg='blue')
            else:
                return '-'

        @functions.signature({'types': []})
        def _func_style_tags(self, tags):
            if tags:
                return ', '.join(tags)
            else:
                return "<none>"
        
        @functions.signature({'types': []})
        def _func_style_synchronized(self, state):
            if state:
                return click.style("V", fg='green')
            else:
                return click.style("X", fg='yellow')

    try:
        apis_filtered = jmespath.search(query, apis, jmespath.Options(custom_functions=CustomFunctions()))
        header = None
        
        logging.debug("apis_filtered: {}".format(apis_filtered))
        
        if len(apis_filtered) > 0 and type(apis_filtered) is list and type(apis_filtered[0]) is dict:
            header = apis_filtered[0].keys()
        
        logging.debug("apis_filtered header: {}".format(header))

        
        justify_columns = {}
        if output == 'table' and header:
            # TODO: Dynamic table style
            for x in range(2, len(header)):
                justify_columns[x] = 'center'
            #justify_columns = {3: 'center', 4: 'center', 5: 'center'}
            # outputFormat.style = justify_columns

        outputFormatType.echo(apis_filtered, header = header, style = justify_columns)

    except exceptions.JMESPathError as jmespatherr:
        logging.exception("LIST JMESPathError exception")
        raise GraviteeioError(str(jmespatherr))
    except Exception:
        logging.exception("LIST Exception")
        raise GraviteeioError("apis filtered {} and the format {}".format(apis_filtered, format))
