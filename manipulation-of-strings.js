//Primitive Strings 
//1
const primitiveString = 'I am a primitive strings'
console.log(typeof primitiveString)
//2
const primitiveString2 = String('I am a string too')
console.log(typeof primitiveString2)

//Object String
const objectString = new String('I am object string')
console.log(typeof objectString)

//Access to characters 
const greeting = 'Hi. How are you?'

console.log(greeting[2]) //shows character in that position 
console.log(greeting.charAt(2)) //shows character in that position

console.log(greeting.indexOf('i')) //shows what's the position of that character
console.log(greeting.indexOf('muffin')) //searches for a word but if the word doesn't exist, it'll show a -1
console.log(greeting.lastIndexOf('o')) //last position when this character were
console.log(greeting.slice(4,8)) //shows what exist between those positions




