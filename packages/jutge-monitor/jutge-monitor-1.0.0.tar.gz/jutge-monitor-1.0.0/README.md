# Monitor for worker machines in Jutge.org

![Logo](jutge-monitor.png)

## Documentation

The `jutge-monitor` script provides monitoring information for a host.


## Installation

Install the monitor with `pip3 install jutge-monitor`. 
You can upgrade it to the latest version with `pip3 install --upgrade jutge-monitor`. 
If you want to uninstall it, use `pip3 uninstall jutge-monitor`.


## Usage

```
Usage: jutge-monitor [-h] [--format FORMAT] [--indent INDENT]

Monitor for worker machines in Jutge.org

optional arguments:
  -h, --help       show this help message and exit
  --format FORMAT  how to format the output (json|yaml|pprint|print) (default: json)
  --indent INDENT  indentation for json and yaml (default: 4)
```

If you fancy colored JSON, use [jq](https://github.com/stedolan/jq): `jutge-monitor | jq`. 


## Credits

- Jordi Petit (https://github.com/jordi-petit)


## License

Apache License 2.0

