class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak(sex) {
        if (this.sex === "male")
            return `It's me! ${this.name}, the parrot!`
        if (this.sex === "female")
            return `Mable says squawk!`

    }
}