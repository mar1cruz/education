### Булевые операторы

**Оператор `||`**

```js
alert(true || true);   // true
alert(false || true);  // true
alert(true || false);  // true
alert(false || false); // false
```

Цепочка ИЛИ `||` возвращает *первое истинное* значение или последнее, если такое значение не найдено.

**Оператор `&&`**

```js
alert(true && true);   // true
alert(false && true);  // false
alert(true && false);  // false
alert(false && false); // false
```

И возвращает *первое ложное* значение. Или последнее, если ничего не найдено.

**Оператор `!`**

Возвращает противоположное значение.

```js
alert( !true ); // false
alert( !0 ); // true
```

В частности, двойное НЕ `!!` используют для преобразования значений к логическому типу:

```js
alert(!!"непустая строка"); // true
alert(!!null); // false
```