function User(name) {
    this.name = name;
    this.sayHi = function () {
        console.log("Меня зовут: " + this.name);
    };
}

const user = new User('dima')
user.sayHi()