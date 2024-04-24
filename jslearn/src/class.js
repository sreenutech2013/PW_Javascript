class Car {

    constructor(model) {
        this.model = model
        console.log(this.CarName(model))
     }

    CarName(model) {
        if (model == 'Astor') {
            return 'MG'
        }
    }
    carModle(name) {
        if (name == 'MG') {
            return 'Astor'
        }
    }

    carVersion(model) {
        if (model == 'Astor') {
            return "1.2"
        }
    }
   
}
module.exports = Car;
