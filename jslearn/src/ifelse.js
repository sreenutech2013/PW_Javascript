// syntax

// if (condition) {
    
//     // statments

// } else {
    
//     // statments
// }

let age = 18;

if ((age > 18) || (age = 18)) {
        console.log("Hurry- Now you are an Adult")
} else {
    console.log("WAit buddy")
}

function buyMobile(price = 85000) {
    let mobilePhone;
    if (price >= 80000 && price <= 90000) {
        mobilePhone = 'Iphone'
    } else if (price >= 20000 && price <= 30000) {
        mobilePhone = 'Samsung'
    } else {
        mobilePhone = 'I dont know'
    }
    return mobilePhone;
}
let price=20000;
console.log(buyMobile(price))
console.log(buyMobile(80000))



////asdasd