# ATtila

[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](https://opensource.org/licenses/MIT) [![Stars](https://img.shields.io/github/stars/ChristianVisintin/ATtila.svg)](https://github.com/ChristianVisintin/ATtila) [![Issues](https://img.shields.io/github/issues/ChristianVisintin/ATtila.svg)](https://github.com/ChristianVisintin/ATtila/) [![PyPI version](https://badge.fury.io/py/attila.svg)](https://pypi.org/project/attila/) [![Build](https://api.travis-ci.org/ChristianVisintin/ATtila.svg?branch=master)](https://travis-ci.org/ChristianVisintin/ATtila) [![codecov](https://codecov.io/gh/ChristianVisintin/ATtila/branch/master/graph/badge.svg)](https://codecov.io/gh/ChristianVisintin/ATtila)

Developed by *Christian Visintin*

Current Version: **1.2.0 (30/05/2020)**

- [ATtila](#attila)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Implementation](#implementation)
    - [Virtual Device](#virtual-device)
  - [ATScripts](#atscripts)
  - [Contributions](#contributions)
  - [Known Issues](#known-issues)
  - [Changelog](#changelog)
  - [Branches](#branches)
  - [License](#license)

---

```sh
pip3 install attila
```

## Introduction

ATtila is both a **Python3 🐍 module and a CLI utility**.
The module's purpose is to ease the communication with an RF module which uses AT commands. It is both possible to send single AT commands indicating what response is expected and AT scritps which indicate all the commands to send, the expected response for each command, what information to store for each command and define an alternative behaviour in case of unexpected responses.  
These are the main functionalities that ATtila provides:

- Façade to communicate with the serial device
- Sending AT commands and define the expected response for it using regex
- Collect values from response and store them in the session storage
- Define a command to execute in case the command fails
- Sending individual AT command to RF module/modem through serial port and get the response for them

ATtila comes, as said before, with a binary (which can be used instead of the classic "chat" binary) or for anything you want.
You can run ATtila binary with

```sh
python3 -m attila
#Or if installed, just
attila
```

```txt
Usage: attila [OPTION]... [FILE]

  With no FILE, run in interactive mode

  -p  <device path>     Use this device to communicate
  -b  <baud rate>       Use the specified baudrate to communicate
  -T  <default timeout> Use the specified timeout as default to communicate
  -B  <break>           Use the specified line break [CRLF, LF, CR, NONE] (Default: CRLF)
  -A  <True/False>      Abort on failure (Default: True)
  -L  <logfile>         Enable log and log to the specified log file (stdout is supported)
  -l  <loglevel>        Specify the log level (0: CRITICAL, 1: ERROR, 2: WARN, 3: INFO, 4: DEBUG) (Default: INFO)
  -v                    Be more verbose
  -q                    Be quiet (print only PRINT ESKs and ERRORS)
  -h                    Show this page
```

## Requirements

- Python3.5 (>= 1.2.0)
  - Python3.4 (up to 1.1.x)
- pyserial3

## Implementation

In order to build your own implementation using ATtila these are the steps you'll need to follow:

1. Import the AT Runtime Environment into your project

    The first thing you have to do is import the AT Runtime Environment and the exceptions it can raise in your project

    ```py
    from attila.atre import ATRuntimeEnvironment
    from attila.exceptions import ATREUninitializedError, ATRuntimeError, ATScriptNotFound, ATScriptSyntaxError, ATSerialPortError
    ```  

2. Instantiate an ATRuntimeEnvironment object

    ```py
    atrunenv = ATRuntimeEnvironment(abort_on_failure)
    ```

3. Configure the communicator

    This is the component which will communicate with your device

    ```py
    atrunenv.configure_communicator(device, baud_rate, default_timeout, line_break)
    ```

4. Open the serial port

    Be careful, this function can return a ATSerialPortError

    ```py
    atrunenv.open_serial()
    ```

5. Choose how to parse commands:

    1. Parse an ATScript

        parse_ATScript can raise ATScriptNotFound or ATScriptSyntaxError

        ```py
        atrunenv.parse_ATScript(script_file)
        ```

    2. Execute directly a command (or an ESK)

        ```py
        response = atrunenv.exec(command_str)
        ```

    3. Add an ATCommand to the session

        ```py
        atrunenv.add_command(command_str)
        ```

6. Execute commands:
    1. Run everything at once and then get a list of ATResponse

        if abort_on_failure is True, the ATRE will raise ATRuntimeError during execution  

        ```py
        response_list = atrunenv.run()
        ```

    2. Run one command a time (if abort_on_failure is True, the ATRE will raise ATRuntimeError):

        ```py
        response = atrunenv.exec_next()
        ```

7. Collect the values you need

    ```py
    rssi = atrunenv.get_session_value("rssi")
    ```

8. Close serial

    ```py
    atrunenv.close_serial()
    ```

### Virtual Device

Since version 1.1.0, it is possible to use a virtual serial device, instead of a real one. This has been introduced for tests purpose, but can actually used in cases where you need to emulate a serial device and you want to keep using ATtila.
In this case, in the ATRE, instead of using configure_communicator use:

```py
def configure_virtual_communicator(self, serial_port, baud_rate, timeout = None, line_break = "\r\n", read_callback = None, write_callback = None, in_waiting_callback = None)
```

The virtual communicator, in addition to the standard one, requires a read, a write and an in waiting callback. These callbacks must replace the I/O operations of the serial device, with something else (e.g. a socket with an HTTP request)

## ATScripts

ATtila uses its own syntax to communicate with the serial device, which is called **ATScript** (ATS).
The basic syntax for it is:

```txt
COMMAND;;RESPONSE_EXPR;;DELAY;;TIMEOUT;;["COLLECTABLE1",...];;DOPPELGANGER;;DOPPELGANGER_RESPONSE
```

To know more about ATS see the [ATScript documentation](./docs/atscript.md)

---

## Contributions

Contributions are welcome! 😉

If you think you can contribute to ATtila, please follow ATtila's [Contributions Guide](CONTRIBUTING.md)

## Known Issues

None, as far as I know at least.

## Changelog

See Changelog [HERE](CHANGELOG.md)

## Branches

- master: stable only
- dev: main development branch
- other features

---

## License

```txt
MIT License

Copyright (c) 2019 Christian Visintin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
