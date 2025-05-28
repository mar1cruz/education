const user = {
    name: 'Dima', age: 23,

    sayHi() {
        console.log(this.name + ' hello')
    },
}

user.sayHi()

console.log(user)
