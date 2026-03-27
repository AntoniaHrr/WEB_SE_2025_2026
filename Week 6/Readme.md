## 1. Въведение в JavaScript

* JavaScript е динамичен език за програмиране, който позволява уеб страниците да бъдат интерактивни.
* Може да се използва в браузъра и на сървъра (Node.js).
* Позволява промяна на съдържанието на страницата, без да се презарежда.
* Ограничения: не може да чете/писва произволни файлове от браузъра, ограничения за достъп до други домейни (Same Origin Policy).

---

## 2. Използване на JavaScript в HTML

* Вграден код:

```html
<script>
  alert('Hello world!');
</script>
```

* Външен файл:

```html
<script src="script.js"></script>
```

* `document.write()` може да се използва за писане на текст директно в страницата.
* Конзолата на браузъра (`console.log`) е мощен инструмент за дебъгване.

---

## 3. Променливи (Variables)

* Контейнери за съхранение на данни: числа, текстове, булеви стойности, масиви, обекти.
* Декларации: `var`, `let`, `const`.

```js
let name = "Иван";
const pi = 3.14;
var age = 25;
```

* Именуване: започва с буква, `_` или `$`, чувствително към главни/малки букви.
* Присвояване и промяна:

```js
let score = 10;
score = 15;
```

* Динамично типизиране:

```js
let example = 42;
example = "Здравей свят!";
```

* Добри практики: използвай `const`, описателни имена, минимален обхват.

---

## 4. Интерактивни функции

* `alert(message)` – показва модален диалог с бутон OK.

```js
alert("Добре дошъл!");
```

* `prompt(message, default)` – поле за въвеждане на текст.

```js
let name = prompt("Как се казваш?", "Иван");
alert("Здравей, " + name + "!");
```

* `confirm(message)` – връща `true` или `false`.

```js
let result = confirm("Сигурен ли си?");
alert(result ? "Да" : "Не");
```

* `console.log(value)` – извежда информация в конзолата.

```js
console.log("Програмата работи!");
```

* Съвет: използвай `console.log` за дебъг, `alert/prompt/confirm` умерено.

---

## 5. Оператори (Operators)

### Аритметични

```js
let x = 5 + 3; // 8
let y = 7 % 2; // 1
let z = 2 ** 3; // 8
```

### Присвояване

```js
let a = 5;
a += 2; // 7
```

### Сравнителни

```js
5 == "5"  // true
5 === "5" // false
```

### Логически

```js
let age = 20, hasTicket = true;
let result = (age > 18 && hasTicket);
```

### Конкатенация на стрингове

```js
console.log('3' + 2); // "32"
console.log(Number('3') + 2); // 5
```

### Комбинирани оператори

```js
let n = 5;
n *= 2 + 3; // 25
```

* Важно: операторът `+` може да извършва конкатенация при низ и число.

---

## 6. DOM (Document Object Model)

* DOM е дървовидна структура на HTML страницата.
* Селектори:

```js
document.getElementById('id')
document.getElementsByClassName('class')
document.querySelector('selector')
document.querySelectorAll('selector')
```

* Манипулиране:

```js
element.innerHTML = "Нов текст";
element.style.color = "red";
var newEl = document.createElement('p');
parent.appendChild(newEl);
parent.removeChild(child);
element.classList.add('new-class');
```

* Събития:

```js
element.addEventListener('click', function(){ /* код */ });
```
---
