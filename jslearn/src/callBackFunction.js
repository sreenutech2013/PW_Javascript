
function someFunction(callbackFun) {
    console.log("This is main function")
    setTimeout(function(){
        callbackFun('Thi is result');
    },1000)
}

function callbackFunction(res) {
    console.log("This is callback function " + res)
}
someFunction(callbackFunction)



let abc = 100

function printtheNumber(num) {
    console.log(num)
}

printtheNumber(abc)
// test('title', async function () {
//     statements 
// })


// POM-- > 

// page or class for every ui page --> functions

// spec --> test() --> callback