### Функции

**Function Declaration**

```js
function sayHi() {
  return 'привет'
}
```

**Function Expression**

```js
const sayHi = function () {
    return 'привет'
}
```

**Arrow Function**

```js
const sayHi = () => {
    return 'привет'
}

const sum = (a, b) => a + b

const pow = a => a ** 2 //при 1 параметре функции можно опустить ( )
```

**Constructor**

```js
function User(name) {
    this.name = name
    this.isAdmin = false
}
```