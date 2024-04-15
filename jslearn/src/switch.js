
let price=800000;
let mobile;

switch (price) {
    case 11000:
    case 50000:
    case 20000:
        mobile = 'Mi';
        break;
    case 80000:
        mobile = 'iphone';
        break;
    case 35000:
        mobile = 'Samsung';
        break;
    case 55000:
        mobile = 'OnePlus'
        break;
    default:
        mobile= 'your wish man'     
}

console.log(mobile)