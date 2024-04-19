let num = 95
// while can execute the satatments untill the condition is true
while (num <= 100) {
    console.log(num);
    num++;
}
num = 95
do {
    console.log(num);
    num++;
}
while(num <= 100)


// let color = page.locator('//xpath').textcontent()
// //blue
// while(color=='green'){
// page.locator('//xpath').click();
// color = page.locator('//xpath').textcontent()
// }
// let color;
// do {
//     page.locator('//xpath').click();
//     color = page.locator('//xpath').textcontent()
// }
// while(color=='green')




//break

let numb = 1;
let internalNum = 0

while (numb <= 1000) {
    if (internalNum === numb) {
        break;
    } else {
        internalNum = numb
    }

    console.log(numb)

}