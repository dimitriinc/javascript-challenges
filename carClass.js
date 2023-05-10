class Car {

    constructor(make, model, year, color) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
        this.speed = 0
        this.isMoving = false
    }

    start() {
        this.isMoving = true
    }

    stop() {
        this.isMoving = false
    }

    accelerate() {
        if (this.isMoving) this.speed += 20
        else console.log('The engine is fuming!')
    }

    break() {
        if (this.isMoving) {
            this.speed -= 10
            if (this.speed <= 0) this.isMoving = false
        } else {
            console.log('Nothing happened')
        }
    }
}

const tesla = new Car('Tesla', 'S', 2016, 'grey')

tesla.start()
tesla.accelerate()
tesla.accelerate()
tesla.break()

console.log(tesla)

export default Car