describe('TEST numbers')

//CASE 1

let res = numbers([9, 12, 34, 6, -5, -16, -18])

if (res instanceof Array
    && res.length === 3
    && res[0] === 61
    && res[1] === -39
    && res[2] === 22)
    {
    success('test ok')
} else {
    fail('test fail')
}

//CASE 2