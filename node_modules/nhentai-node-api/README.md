<h1 align="center" font-weight="bold">nHentai Node API</h1>

<p align="center">
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
  <img src="https://img.shields.io/npm/dt/nhentai-node-api">
  <img src="https://img.shields.io/tokei/lines/github/barthofu/nhentai-node-api">
  <img src="https://img.shields.io/npm/v/nhentai-node-api">
</p>

> #### An unofficial API for [nHentai](https://nhentai.net).

#### Table of content:

* **[Installation](#installation)**
* **[Usage](#use)**
* **[Methods](#methods)**
  * [search()](#search())
  * [getDoujin()](#getDoujin())
  * [getPopular()](#getPopular())
  * [getLatest()](#getLatest())
  * [exists()](#exists())
* **[Data models](#data-models)**
  * [Search](#search)
  * [Doujin](#doujin)
* **[License](#license)**

## Installation
```
$ npm install nhentai-node-api
```

## Usage
```js
const nhentai = require('nhentai-node-api')

```

## Methods

### search()

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| query | string |  | Terms of the search |
| sort | string | `popular` | Sort order of the search. Can be either: `popular`, `popular-week`, `popular-today` or `date` |
| page | number | `1` | Selects the page of the results  |

Usage example: 
```js
nhentai.search('metamorphosis', 'popular-week', 1)
  .then(results => {
    //do things with the results
  })
  .catch(err => console.log(err))
```

###### *Returns: [Search model](#search) object*

### getDoujin()

*Returns the **full object** of a precise doujin.*

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| identifier | string/number |  | Can be either a doujin **id** or the entire **url** |
| simplified | boolean | `false` | Define if the returned object should be simplified a bit (count and link for elements in the `details` field are removed) |

Usage example:
```js
nhentai.getDoujin(177013)
  .then(data => {
    //do things with the data
  })
  .catch(err => console.log(err))
```

###### *Returns: [Doujin model](#doujin) object*

### getPopular()

*Returns the 5 doujins in the `Popular Now` field on the homepage of [nhentai](https://nhentai.net).*

Usage example:
```js
nhentai.getPopular()
  .then(results => {
    //do things with the results
  })
  .catch(err => console.log(err))
```

###### *Returns: [Search model](#search) object*

### getLatest()

*Returns the latest added doujins on the website.*

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| page | number | `1` | Selects the page |

Usage example: 
```js
nhentai.getLatest() //will return the results of the first page as the 'page' parameter isn't specified
  .then(results => {
    //do things with the results
  })
  .catch(err => console.log(err))
```

###### *Returns: [Search model](#search) object*

### exists()

*Simply checks if a doujin url or id exists.*

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| identifier | string/number |  | Can be either a doujin **id** or the entire **url** |

Usage example:
```js
nhentai.exists(177013)
  .then(result => {
    if (result) console.log('This doujin exists!')
    else console.log('This doujin doesn\'t exists!')
  })
  .catch(err => console.log(err))
```

###### *Returns: a boolean*

## Data models

### Search

##### Search data models are **arrays** of **objects**.

```js
[
  {
    id: Number,
    title: String, //original title of the doujin
    language: String, //language of the doujin, can be either: english, japanese or chinese
    thumbnail: String, //url of the cover image
  },
  //etc
]

```

### Doujin

##### Doujin data models are **objects**.

```js
{
  id: Number,
  title: {
    default: String, //complete original title
    pretty: String, //pretty version of the title
    native: String //title in its native language (japanese most of the time)
  },
  language: String, //language of the doujin, can be either: english, japanese or chinese
  cover: String, //image url of the cover
  details: { /*this section is a bit special. Each property correspond to a field underneath the title of the doujin on the website page. If the 'simplified' parameter of getDoujin() is set to true, it will just put strings in the array. But if it's set to false (by default tho), it'll populate the arrays with objects like this:
    {
      name: String, //the value itself
      count: Number, //the number of other doujins that also have this property
      link: String, //the link to the specific page of this property on the website
    }
    */
    parodies: [],
    characters: [],
    tags: [],
    artists: [],
    groups: [],
    categories: [],
  },
  pages: [String], //images urls of the pages
  thumbnails: [String], //images urls of the thumbnails
  favorites: Number, //number of favorites on this doujin
  uploaded: Date, //upload date
  link: String //link to the doujin
}
```

## License
MIT License

Copyright (c) barthofu
