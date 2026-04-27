# JS Цикли

## **1. While**

Изпълнява се, докато условието е вярно.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## **2. Do…while**

Изпълнява се *поне веднъж* преди проверка.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## **3. For**

Най-често използваният цикъл.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## **4. For…in**

Обхожда пропъртита на обект.

```js
for (let key in obj) console.log(key);
```

## **5. For…of**

Обхожда елементи от масиви и стрингове.

```js
for (let v of arr) console.log(v);
```

**break** прекъсва цикъла.
**continue** преминава към следващата итерация.

---

# JS Функции

## Деклариране

```js
function greet() {
  console.log("Hello!");
}
```

## Параметри

```js
function greet(name) {
  console.log("Hello, " + name);
}
```

## Връщане на стойност

```js
function sum(a, b) {
  return a + b;
}
```

---

# Анонимни и Arrow функции

**Анонимна функция:**

```js
let show = function() { console.log("Hi"); };
```

**Arrow функция:**

```js
let multiply = (a, b) => a * b;
```

Пример в DOM:

```js
button.addEventListener("click", () => console.log("Clicked"));
```

---

# JS Обекти

## Създаване

```js
let user = { name: "Ivan", age: 30 };
```

или

```js
let user = new Object();
user.name = "Petur";
```

## Манипулации

```js
user.isAdmin = true;
user.name = "Georgi";
delete user.age;
```

---

# DOM Манипулация

## innerHTML vs textContent

**innerHTML** рендерира HTML.
**textContent** променя само текста.

```js
content.innerHTML = "New <strong>HTML</strong>";
content.textContent = "Just text";
```

---

# Действия по подразбиране

Спират се чрез `event.preventDefault()`.

Пример - валидиране на форма:

```js
if(input.length < 3){
  event.preventDefault();
  document.getElementById('formResult').textContent = "Name must be at least 3 characters long!";
}
```
