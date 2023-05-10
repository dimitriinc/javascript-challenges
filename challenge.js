import Car from './carClass'

const tesla = new Car('Tesla', 'S', 2016, 'grey')

tesla.start()
tesla.accelerate()
tesla.accelerate()
tesla.break()

console.log(tesla)