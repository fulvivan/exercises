describe('TEST slice')

// CASE 1

var string = 'vediamo se mi spiego'
var res = slice(string, 1, 3)

if (typeof res === 'string'
    && res.length === 2
    && res === 'ed')
    success('test ok')
else
    fail('test fail')

// CASE 2
var string = 'vediamo se mi spiego'
var res = slice(string, 8)

if (typeof res === 'string'
    && res.length === 12
    && res === 'se mi spiego')
    success('test ok')
else
    fail('test fail')

// CASE 3
var string = 'vediamo se mi spiego'
var res = slice(string, -3)

if (typeof res === 'string'
    && res.length === 3
    && res === 'ego')
    success('test ok')
else
    fail('test fail')

// CASE 4
var string = 'vediamo se mi spiego'
var res = slice(string, 50)

if (typeof res === 'string'
    && res.length === 0
    && res === '')
    success('test ok')
else
    fail('test fail')

// CASE 5
var string = 'vediamo se mi spiego'
var res = slice(string )

if (typeof res === 'string'
    && res.length === 20
    && res === 'vediamo se mi spiego')
    success('test ok')
else
    fail('test fail')

// CASE 6
var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, -9, -5)
        
if (typeof res === 'string'
    && res === 'lazy')
    success('test ok')
else
    fail('test failed')


