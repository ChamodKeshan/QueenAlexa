#!/usr/bin/env node
'use strict';
var meow = require('meow');
var nickNames = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ nicknames',
		'  Lucy',
		'',
		'  $ nicknames --all --type male',
		'  Max',
		'  Buddy',
		'  ...',
		'',
		'Options',
		'  --all   Get all names instead of a random name',
		'  --type  Type of name: female|male|all  Default: all'
	].join('\n')
});

var type = cli.flags.type || 'all';
console.log(cli.flags.all ? nickNames[type].join('\n') : nickNames[type + 'Random']());
