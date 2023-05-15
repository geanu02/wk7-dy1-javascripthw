console.log("Hello World")

let fullName = "Gian Carlo Torres"
console.log(fullName[0].toUpperCase())

console.log(fullName.length)

// Out of Place function, strings are immutable

let slicedName = fullName.slice(6,11)

console.log(slicedName)

var num = 1
console.log('suffix', num++)
console.log('prefix', ++num)

console.log(Math.floor(11/2), 'math floor')

var decimalStr = '12.5'

console.log(parseInt(decimalStr))
console.log(parseFloat(decimalStr))

var myNum = 100
var numbers = myNum.toString()
console.log(myNum, typeof numbers)

console.log(parseFloat("3.14") + 4)

// Bool

var bool1 = true
console.log(typeof bool1)

// Comparison

console.log(!10 > 11)

const shortCircuit = num => { console.log(`${num} ran`); return true ? num == 1 : false; }

shortCircuit()

const myArray = ['Sean']
myArray.push('Dylan', 'Gian', 'Todd', 'John', 'Alec')

const [ teacher1, teacher2, ...students ] = myArray
console.log(teacher1, teacher2)
console.log(...students)

students.unshift('Khoa', 'David')
students.unshift('Karina', 'Chris')
console.log(...students)

// .shift removes from the beginning of the list

students.shift()
console.log(...students)

// .indexOf()

console.log(students.indexOf('Todd'))

// Array.Methods(<function>)
// .map

console.log(students.map(student => { return student.toUpperCase() }))

// .filter

console.log(students.filter(student => student.length === 4))

// .reduce 

array2 = [12, 3, 4, 5]
console.log(array2.reduce(((acc, num) => acc * num), 2))

// .toString()

console.log(students.toString())

// .join()

console.log(students.join(', '))

// Slicing

console.log(students.slice(1,4))

// Splice

console.log(students.splice(2,1,'Karina'))
console.log(students)

const addMultipleNums = ( num1, num2, num3 ) => { num1 + num2 + num3 }

const randomNums = [10, 4, 5]

const addManyNumbers = (...numbers) => {
    console.log(numbers)
    return numbers.reduce((acc, num) => acc + num)
}

console.log(addManyNumbers(10, 4, 9, 10, 10, 11))
console.log(addManyNumbers(...randomNums))

// Conditionals
// if () {}
// if () {} else if {} syntax
// if () {} else if () {} else {} syntax

// For Loop
// Traditional syntax
// for (index; condition; incrementer) {}

for (let i = 0; i < 10; i++) {
    console.log(`i = ${i}`)
}

for (let i = 0; i < 10; i+=2) {
    console.log(`i = ${i}`)
}