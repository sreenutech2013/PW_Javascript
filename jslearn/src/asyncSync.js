
async function fun1() {
    await setTimeout(function () { }, 3000);
    return 'Hello async function1'

}

async function fun2() {
    console.log(await fun1())
    console.log("this should print 1st");
}

let fun = fun2();

console.log("this should print 2st");
