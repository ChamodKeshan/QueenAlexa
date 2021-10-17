# Nicknames

Generate male and female nicknames. Based off Sindre Sorhus' [Dog Names](https://github.com/sindresorhus/dog-names).

## Install

```
$ npm install --save nicknames
```


## Usage

```js
var nicknames = require('nicknames');

nicknames.femaleRandom();
//=> Cookie
```


## API

### .female

Type: `array`

Top 100 female nicknames sorted by popularity.

### .male

Type: `array`

Top 100 male nicknames sorted by popularity.

### .all

Type: `array`

Top 200 nicknames sorted by popularity.

### .femaleRandom()

Type: `function`

Random female nickname.

### .maleRandom()

Type: `function`

Random male nickname.

### .allRandom()

Type: `function`

Random nickname.


## CLI

```
$ npm install --global nicknames
```

```
$ nicknames --help

  Examples
    $ nicknames
    Cookie

    $ nicknames --all --type male
    Champ
    Captain
    ...

  Options
    --all   Get all names instead of a random name
    --type  Type of name: female|male|all  Default: all
```


## Release History
* 1.0.2: Add new nicknames.
* 1.0.1: Update documentation.
* 1.0.0: Initial release.
 
## Contributing
1. Fork it
2. Run `npm install`
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am "Add some feature"`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create new Pull Request

## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)
