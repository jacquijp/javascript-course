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

