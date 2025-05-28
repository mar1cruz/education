### Объекты

Создание через:

```js
let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"
```

Копирование объектов

1. `Object.assign(dest, [src1, src2, src3...])`

```js
let user = {name: "John"};

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

Object.assign(user, permissions1, permissions2);


//теперь user = { name: "John", canView: true, canEdit: true }
```

2. Спред оператор

```js
let user = {name: "John"};

const anotherUser = {...user}
```

3. loadash через `_.cloneDeep(value)`
4. через `structuredClone()`