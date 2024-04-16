//syntax
function funName() {
    //code 
    console.log('fun name')
}


// variables with in the function 
function printFullName() {
    let firstName= 'Suresh'
    let LastName = 'Kumar'
    
    console.log("Here is the fullname "+firstName+' ' +LastName)
}

printFullName();


function printFullNameWithParams(fstName = 'dont worry', LstName) {
      console.log("Here is the fullname "+fstName+' ' +LstName)
}

printFullNameWithParams('naresh', 'kumar')
let firstName = 23412341
let lastName = 'Rao'
printFullNameWithParams(firstName, lastName)
printFullNameWithParams()

function userGlobalVar() {
    firstName = 'Harish'
    let lastName = 'something'
    console.log("Here is the fullname with gobal varaibles "+firstName +'  ' +lastName)
}
userGlobalVar();
console.log("Here is the fullname outside "+firstName +'  ' +lastName)
printFullNameWithParams(firstName, lastName)



// Tasks
// create function without variables --> write logic within that and call that function
//accept params for the function --> call that function with diff set of var

//update

// TestScore = 75;
// Grade = "A+";
// GPA = 2.1;


// if (a=(TestScore >= 80) && (GPA>= 3.5) || (Grade == "A+"));
// {
//     console.log("boolean result ", a);
// }
// if(b=(TestScore >= 80 || GPA>= 3.5 || Grade == "A+"));
// {
//     console.log("boolean result ", b);

// }


// Return statements

function add(x, y) {
    let z = x + y;
    // console.log(z)
    return z;
}

let a = add(10, 20)
let b = add(110, 210)

console.log(a)
console.log(b)

// Objects

let car = {
    name: 'Audi',
    model: 'xyz',
    color: 'red'
}
    
console.log(car.name);  


let person = {
    Firstname: 'Suresh',
    LastName: 'Kumar',
    FullName: function () {
        return this.Firstname + ' '+ this.LastName
    }
}

let person2 = {
   arr1 :[{}],
    Firstname: 'Harish',
    LastName: 'Kumar2',
    age: '',
    FullName: this.Firstname + ' '+ this.LastName
   
}

console.log(person.FullName())
console.log(person.LastName)

