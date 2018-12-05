const sum = (a, b) => a + b

const subtract = (a, b) => a - b

// Let's write some tests for those functions
let expected, actual

expected = 3
actual = sum(1, 2)
if (expected !== actual) {
    throw new Error(`Sum is broken; expected ${expected} to equal ${actual}`)
}

expected = 1
actual = subtract(2, 1)
if (expected !== actual) {
    throw new Error(`Subtract is broken; expected ${expected} to equal ${actual}`)
}