# haikunator-cli

A simple cli interface to generate Heroku-like random names

## Usage

```
haikunate [options]

Generate Heroku-like random names

Options:
  --version          Show version number                               [boolean]
  -c, --tokenChars   Custom characters to use for token
  -d, --delimiter    Delimiter                                    [default: "-"]
  -h, --tokenHex     Use hex instead of numbers for tokens      [default: false]
  -l, --tokenLength  Length of the token to append                  [default: 0]
  --help             Show help                                         [boolean]
```

## Additinal info

This script uses [HaikunatorJS](https://github.com/Atrox/haikunatorjs) to generate its names.
