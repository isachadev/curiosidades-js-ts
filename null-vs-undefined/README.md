# Null vs Undefined, Javascript

Siempre suelo confundir estos 2 conceptos, dejare un apunte de las diferencias de cada uno, puede que te sirva a ti también 😉

---

## ℹ️ Significado

- **null**: Valor vacío intencionalmente. Lo asignas tú para indicar que algo no tiene valor (y así debe ser).

- **undefined**: Valor aún no asignado. JavaScript lo coloca automáticamente cuando una variable no fue inicializada, aunque también puedes asignarlo tú.

## 🧐 Typeof

¿Qué pasa si se utiliza `typeof`?

```
typeof null         //object
typeod undefined    //undefined

```

**Curiosamente** null es un objeto (como casi todo en javascript)

## 🖥️ Comportamiento en JSON

Es donde hay una diferencia importante, al serializarlo a cadena de texto con `JSON.stringify(ejemplo)`, los atributos `undefined` son eliminados, mientras que los atributos con valor `null`, se siguen manteniendo.

```
const persona = {
    nombre: "Isa",
    apellido: null,
    edad: undefined,
};

console.log(JSON.stringify(persona));
// {"nombre":"Isa","apellido":null}

```

Esto pasa porque `undefined` se considera no relevante para JSON, `null` es un valor explicito.

## 🟰 Comparadores

Se tiene resultados diferentes si se hacen las comparaciones con la igualdad abstracta o extricta.

```
// Comparación abstracta
null == undefined   // true
undefined == null   // true

// Comparación estricta
null === undefined  // false
undefined === null  // false
```

## 🧩 Usos comunes

- **null**: Valor vacío intencional para reinicio o limpieza. (Utilizarlo en valores que quieres controlar)

- **undefined**: Valor asignado por js u opcional. (Parametros opcionales)

---

En resumen:
`Undefined` valor asignado por js (warning, error u opcional).
`null` es una decisión explícita del programador.
