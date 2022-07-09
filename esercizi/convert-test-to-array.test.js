describe('TEST convertTextToArray')

// CASE 1

var res = convertTextToArray('se omesso?')

if (res instanceof Array 
    && res.length === 10
    && res[0] === 's'
    && res[1] === 'e'
    && res[2] === ' '
    && res[3] === 'o'
    && res[4] === 'm'
    && res[5] === 'e'
    && res[6] === 's'
    && res[7] === 's'
    && res[8] === 'o'
    && res[9] === '?')
    {
    success('test ok')
} else {
    fail('test fail')
}

// CASE 2

var res = convertTextToArray('boh')

if (res instanceof Array 
    && res.length === 3
    && res[0] === 'b' 
    && res[1] === 'o' 
    && res[2] === 'h') {
    success('test ok')
} else {
    fail('test fail')
}
