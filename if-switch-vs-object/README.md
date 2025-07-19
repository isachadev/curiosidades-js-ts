# if/else, switch vs object

En `JavaScript`, es común usar **if/else** o **switch** para controlar el flujo del programa, cuando tienes múltiples casos que comparar. Sin embargo, existen casos en los que podriamos simplificar el código utilizando **objetos**.

---

## Problema clásico: muchos casos a comparar

Supongamos que tenemos un **LED RGB** de estados, que cambia su color dependiendo de su estado actual: `iniciando, encendido, apagado, error, alerta`.
Cada estado corresponde a un color: `azul, verde, sin color, rojo, amarillo`, respectivamente.

### Solucion con if/else

Una forma muy común y fácil de entender, sobre todo para quienes están comenzando con la programación.

```ts
if (status === "iniciando") {
  return "🔵 azul";
} else if (status === "encendido") {
  return "🟢 verde";
} else if (status === "error") {
  return "🔴 rojo";
} else if (status === "alerta") {
  return "🟡 amarillo";
} else {
  return null;
}
```

### Solución con switch

Alternativa muy utilizada cuanto tienes múltiples casos que comparar.

```ts
switch (status) {
  case "iniciando":
    return "🔵 azul";
  case "encendido":
    return "🟢 verde";
  case "error":
    return "🔴 rojo";
  case "alerta":
    return "🟡 amarillo";
  default:
    return null;
}
```

### Solución con objetos como mapa

Más corto y fácil de entender. En casos como este, mucho más conveniente.

```ts
const colors: Partial<Record<StatusType, StatusColorType>> = {
  iniciando: "🔵 azul",
  encendido: "🟢 verde",
  error: "🔴 rojo",
  alerta: "🟡 amarillo",
};

return colors[status] ?? null;
```

## Conclusión

Cuando tienes que comparar muchos casos con respuestas simples, un objeto podría ser la solución más limpia.
Pero si cada caso tiene lógica distinta y más compleja, tendrías que adaptar el objeto para que siga siendo una buena implementación, caso contrario siempre puedes utilizar la buena y confiable **if/else** o **switch**.
