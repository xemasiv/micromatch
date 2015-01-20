/*!
 * micromatch <https://github.com/jonschlinkert/micromatch>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));
var ref = require('./support/reference');
var mm = require('..');

if ('minimatch' in argv) {
  mm = ref.minimatch;
}
if ('wildmatch' in argv) {
  mm = ref.wildmatch;
}

describe('extglob', function () {
  it('should match character classes:', function () {
    mm.match(['axb'], 'a?(b*)').should.eql([]);
    mm.match(['ax'], '?(a.*|b)').should.eql([]);
    mm.makeRe('?(a.*|b)').should.eql(/^(?:.(a.(?!\.)(?=.)[^\/]*?|b))$/);
  });
});

// console.log(/a?(b+)/.test('ax'))
// console.log(/a?(b*)/.test('ax'))
// console.log(/a?(b*)/.test('axb'))
// console.log(/a?(b*)/.test('axbbbb'))
