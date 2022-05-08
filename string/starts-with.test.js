describe('TEST starts-with')

describe ('CASE 1')
var string = 'vediamo se mi spiego'
var res = startsWith(string, 'ved')

if (typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test fail')

describe ('CASE 2')
var string = 'vediamo se mi spiego'
var res = startsWith(string, 'se', 8)

if (typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test fail')

describe('CASE 3')

var string = 'vediamo se mi spiego'
var res = startsWith(string, 'mo')

if (typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail('test fail')
