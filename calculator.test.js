const calculator = require('./calculator')

test("calculator functions",()=>{
    expect(calculator().divide(6,2)).toBe(3)
    expect(calculator().multiply(3,3)).toBe(9)
    expect(calculator().add(1,1)).toBe(2)
    expect(calculator().subtract(12,4)).toBe(8)

})