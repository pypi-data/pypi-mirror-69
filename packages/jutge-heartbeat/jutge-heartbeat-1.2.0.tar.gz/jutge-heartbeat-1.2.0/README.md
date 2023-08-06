# Heartbeat for worker machines in Jutge.org

![Logo](jutge-heartbeat.png)

## Documentation

The `jutge-heartbeat` script periodically sends a request to 
a web server to tell that it is currently alive, possibly including
monitor information.

The `jutge-heartbeat-listener` script contains a fake web server
to test the heartbeat. Use this listener only for testing, not
for production. 


## Installation

Install the package with `pip3 install jutge-heartbeat`. 
You can upgrade it to the latest version with `pip3 install --upgrade jutge-heartbeat`. 
If you wish to uninstall it, use `pip3 uninstall jutge-heartbeat`.


## Usage

Execute ```jutge-heartbeat --help``` to get help.


## Credits

- Jordi Petit (https://github.com/jordi-petit)


## License

Apache License 2.0
