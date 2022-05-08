describe('TEST calcPopulation');

// CASE 1

var res = calcPopulation(5, 40, 20, 3, 12000)

if (
    typeof res === "number"
    && res === 13955
)
    success('test ok')
else
    fail('test failed')

// CASE 2

res = calcPopulation(2.5, 60, 75, 5, 15000)

if (
    typeof res === "number"
    && res === 16892
)
    success('test ok')
else
    fail('test failed')

// CASE 3

res = calcPopulation(1.65, 10, 126, 4, 7000)

if (
    typeof res === "number"
    && res === 7000
)
    success('test ok')
else
    fail('test failed')

// TEST ISMAEL
describe('TEST calcPopulation');

// CASE 1

var res = calcPopulation(2, 80, 50, 5, 1000)

if (
    typeof res === "number"
    && res === 1260
)
    success('test ok')
else
    fail('test failed')

// CASE 2

res = calcPopulation(3, 40, 90, 8, 3030)

if (
    typeof res === "number"
    && res === 3394
)
    success('test ok')
else
    fail('test failed')

// CASE 3

res = calcPopulation(3, 3, 23, 34, 430)

if (
    typeof res === "number"
    && res === 20
)
    success('test ok')
else
    fail('test failed')