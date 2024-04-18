//map

// blue house
// green house
// yellow house

// Key         Value
// Sanjay-- > Blue house
// Lucky --> Green House

//Map is key--> value pair which we want map a data 

const students = new Map([["sanjay", "blue"], ["Lucky", "green"]])
console.log(students)

console.log(students.get('sanjay'))

students.set('Rajesh', 'Yellow')

console.log(students)

students.delete('Rajesh')

console.log(students)

console.log(students.has('Rajesh'))

console.log(students.has('Lucky'))

console.log(students.size)
