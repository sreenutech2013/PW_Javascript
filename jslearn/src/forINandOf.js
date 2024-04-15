
// objects

let person = {
    Firstname: 'Harish',
    LastName: 'Kumar2',
    age: '36',
    emp: [{ salary: 10000, tax: 10 }, { desg: 'Engineer', resp: 'softwareTester' }],
}
// for in loop 
for (let x in person) {
    console.log(person[x])
}
// for in loop 
for (let x of person.emp) {
    for (let y in x) {
        console.log(x[y])
    }
}