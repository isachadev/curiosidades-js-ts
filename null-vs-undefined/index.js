/**
 * SIGNIFICADO
 *
 * null: Sin valor (intencionamente).
 * undefined: Aún no tiene valor (error o decición).
 */

/**
 * TYPEOF
 *
 * typeof null
 * typeod undefined
 */
console.log("TYPEOF");
console.log("typeof null: ", typeof null); //object
console.log("typeof undefined: ", typeof undefined); //undefined

/**
 * COMPORTAMIENTO EN JSON
 */
console.log("\n\nCOMPORTAMIENTO EN JSON");
const persona = {
  nombre: "Isa",
  apellido: null,
  edad: undefined,
};

console.log("persona: ", JSON.stringify(persona)); // {"nombre":"Isa","apellido":null}

/**
 * COMPARADORES
 */
console.log("\n\nCOMPARADORES ");

// Comparación abstracta
console.log("null == undefined: ", null == undefined); // true
console.log("undefined == null: ", undefined == null); // true

// Comparación estricta
console.log("null === undefined: ", null === undefined); // false
console.log("undefined === null: ", undefined === null); // false
