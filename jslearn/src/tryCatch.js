// Error --> it may stop of make test flaky

// try {

// } catch (ex) {
    

// }

// we can coninue
function errorHandle() {
    try {
        let x;
        console.log(x.toString())
    } catch (ex) {
        if (ex.toString().includes('TypeError')) {
            // throw "Hey this is something with Type casting error"
            throw 400
        } else {
            throw ex
        }
    }
    finally {
    
        console.log('This is final statment to execute after try catch')

    }
    
}

errorHandle();
console.log("final statments")

// comeup with functions handling real time logics , like calculations