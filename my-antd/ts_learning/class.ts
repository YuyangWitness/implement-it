class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
console.log(snake.run())

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const aaa = new Dog("aaa")
console.log(aaa.bark())

class Cat extends Animal {
  constructor(name: string) {
    super(name)
    console.log(this.name)
  }

  run() {
    return `Meow ${super.run()}`
  }
}

const bbb = new Cat("bbb")
console.log(bbb.run())


interface Radio{
  switchRadio(): void
}

interface Battery {
  checkBatteryStatus(): void
}

// interface可以使用extends
interface RadioWithBattery extends Radio{
  checkBatteryStatus(): void
}

class Car implements Radio {
  switchRadio() {}
}

class CellPhone implements Radio, Battery {
  switchRadio(){}
  checkBatteryStatus(){}
}

class CellPhone2 implements RadioWithBattery {
  switchRadio(){}
  checkBatteryStatus(){}
}