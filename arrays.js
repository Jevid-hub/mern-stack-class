// let fruis = ['apple', 'banana']
// fruits.push('orange', 'grape')
// console.log(fruis)

// //unshift method
// let fruit = ['banana', 'orange']
// fruit.unshift('apple','grape')
// console.log(fruit)

// //slice method
// let numbers = ["a","b","c","d","e"]
// let slicedNumbers = numbers.slice(1,5)
// console.log(slicedNumbers)

// //split method
// let sentence = "Hello, this is a sentence"
// let words = sentence.split('')
// console.log(words)


// const arr = [1, 2, 3, 4, 5];
//  const [a,...rest]=arr
// console.log(a)

// console.log(rest)

// //splice method removing elements
// let colors = ['red','green','blue','yellow','orange']
// let removedColors = colors.splice(2,2)
// console.log(removedColors)

// //splice method add element
// let fruits = ['apple','banana','orange']
// fruits.splice(1,0,'grape','kiwi')
// console.log(fruits)



function getfirstElement(arr){
    const firstElem=arr[0];
    return firstElem;
}

const getResult=getfirstElement([5,3,6])
console.log(getResult)



function getlastElement(arr){
    const lastElem=arr[-1]
    return lastElem
}
const result=getlastElement([1,2,3,4])
console.log(result)


//3

let person = {
    name: "Jevid kunwar",
    age: 30,
    city: "Kathmandu"
}


function getPersonInfo(person) {
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`
}

let personInfo = getPersonInfo(person)
console.log(personInfo)


//4


function toUpperCase(str) {
    return str.toUpperCase();
}

let sampleString = "hello world"
let upperCaseString = toUpperCase(sampleString)
console.log(upperCaseString)

//5

function multiply(a, b) {
    return a * b
}

let num1 = 2;
let num2 = 2;
let product = multiply(num1, num2)
console.log(product)

//6

function getLastElement(arr) {
    return arr[arr.length - 1]
}


let exampleArray = [10, 20, 30, 40, 50]
let lastElement = getLastElement(exampleArray)
console.log(lastElement)



//10

function concatenateStrings(str1, str2) {
    return str1 + str2;
}
let string1 = "Hello "
let string2 = "world"
let concatenatedString = concatenateStrings(string1, string2)
console.log(concatenatedString)


//15



let student = {
    firstName: "jevid",
    lastName: "kunwar",
    grade: "A"
}


function getFullName(student) {
    return `${student.firstName} ${student.lastName}`;
}


let fullName = getFullName(student);
console.log(fullName)







function subtract(a, b) {
    return a - b;
}


let numb1 = 10
let numb2 = 5
let difference = subtract(numb1, numb2)
console.log(difference)






function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}


let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let mergedArray = mergeArrays(array1, array2)
console.log(mergedArray)






function removeFirstElement(arr) {
    
    return arr.slice(1)
}

let originalArray = [10, 20, 30, 40, 50]
let newArray = removeFirstElement(originalArray)
console.log(newArray)










let game = {
    name: "The Car Game",
    genre: "Racing",
    platforms: ["mobile","PC"]
}
function getPlatformList(game) {
    return game.platforms;
}


let platforms = getPlatformList(game)
console.log(platforms)






function countElements(arr) {
    return arr.length;
}


let exampleArrayy = [1, 2, 3, 4, 5]
let count = countElements(exampleArray)
console.log(count)
