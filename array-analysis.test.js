import { analyze } from "./array-analysis";



test ("analyze array",()=>{
    expect(analyze([1,2,3])).toEqual({sum:6, min:1, max:3, length:3})
})