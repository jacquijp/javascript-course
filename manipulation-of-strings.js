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

console.log(greeting.length) //shows the length of the string
console.log(greeting.toLocaleUpperCase()) //shows the string all in upper cases
console.log(greeting.toLocaleLowerCase()) //shows the string all in lower cases

const dividedGreeting = greeting.split(' ') //shows the string as an array with every word separated
console.log(dividedGreeting)
console.log(dividedGreeting[1]) //Shows the word in that position 

const greetingWithSpaces = " How are you? "
const greetingNoSpaces = greetingWithSpaces.trim() //eliminates the spaces at the begging and at the end of the string 
console.log(greetingNoSpaces)

const originalGreeting = 'Hi, World'
const newGreeting = originalGreeting.replace('World', 'Everybody')
console.log(newGreeting)



