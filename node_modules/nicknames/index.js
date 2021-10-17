'use strict';
var uniqueRandomArray = require('unique-random-array');
var femaleNicknames = require('./female-nicknames.json');
var maleNicknames = require('./male-nicknames.json');

var allNicknames = [];

femaleNicknames.forEach(function (el, i) {
	allNicknames.push(el, maleNicknames[i]);
});

exports.female = femaleNicknames;
exports.male = maleNicknames;
exports.all = allNicknames;

exports.femaleRandom = uniqueRandomArray(femaleNicknames);
exports.maleRandom = uniqueRandomArray(maleNicknames);
exports.allRandom = uniqueRandomArray(allNicknames);
