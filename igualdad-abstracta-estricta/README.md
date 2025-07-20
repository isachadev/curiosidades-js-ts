# 🟰 Igualdad abstracta e igualdad estricta (== vs ===).

En JavaScript tenemos dos operadores de comparación para verificar la igualdad de dos valores, pero funcionan de manera diferente.

---

## Igualdad abstracta 😃 (==)

Igualdad forzada o **igualdad débil**, compara los valores aunque sean de distintos tipos. JavaScript realiza una conversión automática para intentar que coincidan.

```js
123 == "123"; // true
false == ""; // true
null == undefined; // true
0 == false; // true
```

## Igualdad estricta 😠 (===)

Se espera que tanto el valor como el tipo de dato sean iguales, no se realizan conversiones.

```js
123 === "123"; // false
false === ""; // false
null === undefined; // false
0 === false; // false
```

Usa `===` siempre que puedas. Te da mayor control y mejora la calidad de tu código.
