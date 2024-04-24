const Car = require('./class')

class usingCarClass {
    constructor() {
        let carObject = new Car('Astor')

        console.log(carObject.carModle('MG'))

        console.log(carObject.carVersion('Astor'))
    }
}

let userClass = new usingCarClass()