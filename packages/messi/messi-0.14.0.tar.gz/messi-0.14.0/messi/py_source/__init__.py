import re
import os
from pbtools.parser import parse_file
from pbtools.parser import camel_to_snake_case
from grpc_tools import protoc
from ..generate import get_messages
from ..generate import make_format


SCRIPT_DIR = os.path.dirname(os.path.realpath(__file__))
TEMPLATES_DIR = os.path.join(SCRIPT_DIR, 'templates')

ON_MESSAGE = '''\
    async def on_{message.name}(self, message):
        """Called when a {message.name} message is received from the server.

        """
'''

INIT_MESSAGE = '''\
    def init_{message.name}(self):
        """Prepare a {message.name} message. Call `send()` to send it.

        """

        self._output = {name}_pb2.ClientToServer()

        return self._output.{message.name}
'''

HANDLE_MESSAGE = '''\
        elif choice == '{message.name}':
            await self.on_{message.name}(message.{message.name})\
'''

RE_TEMPLATE_TO_FORMAT = re.compile(r'{'
                                   r'|}'
                                   r'|NAME_TITLE'
                                   r'|NAME'
                                   r'|ON_MESSAGES'
                                   r'|INIT_MESSAGES'
                                   r'|HANDLE_MESSAGES')


class Generator:

    def __init__(self, name, parsed, output_directory):
        self.name = name
        self.output_directory = output_directory
        self.client_to_server_messages = []
        self.server_to_client_messages = []

        for message in parsed.messages:
            if message.name == 'ClientToServer':
                self.client_to_server_messages = get_messages(message)
            elif message.name == 'ServerToClient':
                self.server_to_client_messages = get_messages(message)

    def read_template_file(self, filename):
        with open(os.path.join(TEMPLATES_DIR, filename)) as fin:
            return RE_TEMPLATE_TO_FORMAT.sub(make_format, fin.read())

    def generate_files(self):
        on_messages = []
        init_messages = []
        handle_messages = []

        for message in self.client_to_server_messages:
            init_messages.append(INIT_MESSAGE.format(name=self.name,
                                                     message=message))

        for message in self.server_to_client_messages:
            on_messages.append(ON_MESSAGE.format(message=message))
            handle_messages.append(HANDLE_MESSAGE.format(message=message))

        name_title = self.name.title().replace('_', '')
        handle_messages = 8 * ' ' + '\n'.join(handle_messages)[10:]
        client_py = self.read_template_file('client.py')
        code = client_py.format(name=self.name,
                                name_title=name_title,
                                on_messages='\n'.join(on_messages),
                                init_messages='\n'.join(init_messages),
                                handle_messages=handle_messages)

        client_py = os.path.join(self.output_directory, f'{self.name}_client.py')

        with open(client_py, 'w') as fout:
            fout.write(code)


def generate_files(import_path, output_directory, infiles):
    """Generate Python source code from proto-file(s).

    """

    command = ['protoc', f'--python_out={output_directory}']

    for path in import_path:
        command += ['-I', path]

    command += infiles

    result = protoc.main(command)

    if result != 0:
        raise Exception(f'protoc failed with exit code {result}.')

    for filename in infiles:
        parsed = parse_file(filename, import_path)
        basename = os.path.basename(filename)
        name = camel_to_snake_case(os.path.splitext(basename)[0])

        Generator(name, parsed, output_directory).generate_files()
