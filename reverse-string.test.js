const reverse = require("./reverse-string")

test('reverse a word',()=>{
    expect(reverse("good")).toBe("doog")
})