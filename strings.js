//Creating strings
const firstWay = 'Single quotes'
const secondWay = "Single quotes"
const thirdWay = `Single quotes`

//1. Concatenation: Option +
const street = 'Fake street 99'
const city = 'Solna'
const address = 'My full address is: ' + street + ' ' + city
console.log(address)

//2. Concatenation Template Literals 
const name = 'Pedro'
const country = 'Brazil'
const introduction = `Hi! I am ${name} from ${country}`
console.log(introduction)

//3. Concatenation: join()
const firstSection = 'I love'
const secondSection = 'people from'
const thirdSection = 'Spain'
const sentence = [firstSection, secondSection, thirdSection]
console.log(sentence.join(' food '))

//4.Concatenations: concat()
const hobbie1 = 'running'
const hobbie2 = 'cooking'
const hobbie3 = 'painting'
const hobbies = 'My hobbies are: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.')
console.log(hobbies)

//Scape characters
//1.Alternative Scape 
const alternativeScape = "I'm the alternative sentence"

//2. Inverted Slash
const invertedSlash = 'I\'m the inverted slash'

//3. Inverted Quotes
const invertedQuote = `I'm inverted quotes`

//Longs strings
//1
const poem = 'First line of the poem, \n' +
    'Second line of the poem, \n' +
    'Third line of the poem, \n' +
    'Forth and last line of the poem.'

console.log(poem)
//2
const poem2 = 'First line of the poem, \n\
Second line of the poem, \n\
Third line of the poem, \n\
Forth and last line of the poem.'

console.log(poem2)
//3
const poem3 = `First line of the poem,
Second line of the poem,
Third line of the poem,
Forth and last line of the poem.`

console.log(poem3)


