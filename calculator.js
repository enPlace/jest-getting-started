function calculator(){
    function divide(num1, num2){
        return num1/num2
    }
    function multiply(num1, num2){
        return num1*num2
    }
    function add(num1, num2){
        return num1+num2
    }
    function subtract(num1, num2){
        return num1-num2
    }
    return {divide, multiply, add, subtract}
}

module.exports = calculator