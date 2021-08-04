// takes a string and returns that string with the first character capitalized.

function capitalize(string){
    return string[0].toUpperCase() + string.slice(1, string.length)
}

module.exports = capitalize;