const capitalize = require('./capitalize-string')

test("capitalize", ()=>{
    expect(capitalize("hello")).toBe("Hello")
})

test("capitalize sentence", ()=>{
    expect(capitalize("test a longer string")).toBe("Test a longer string")
})