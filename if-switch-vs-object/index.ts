import Led from "./Led.js";

type StatusColorType = "🔵 azul" | "🟢 verde" | "🔴 rojo" | "🟡 amarillo";
type StatusType = "iniciando" | "encendido" | "error" | "alerta" | "apagado";

/**
 * Asigna un color segun el estado, utilizando if/else
 *
 * @param status Estado del led
 * @returns Color de led segun su estado
 */
function status_color_if_else(status: StatusType): StatusColorType | null {
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
}

/**
 * Asigna un color segun el estado, utilizando switch
 *
 * @param status Estado del led
 * @returns Color de led segun su estado
 */
function status_color_switch(status: StatusType): StatusColorType | null {
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
}

/**
 * Asigna un color segun el estado, utilizando un objeto como mapa
 *
 * @param status Estado del led
 * @returns Color de led segun su estado
 */

function status_color_object(status: StatusType): StatusColorType | null {
  const colors: Partial<Record<StatusType, StatusColorType>> = {
    iniciando: "🔵 azul",
    encendido: "🟢 verde",
    error: "🔴 rojo",
    alerta: "🟡 amarillo",
  };

  return colors[status] ?? null;
}

/**
 * Declaración del objeto Led.
 */
let led = new Led<StatusColorType>("Led de estados");

const status: StatusType = "encendido";

/**
 * Soluciones de asignación de color segun su estado.
 */
led.setColor(status_color_object(status));
// led.setColor(status_color_if_else(status));
// led.setColor(status_color_switch(status));

/**
 * Imprimir resultados
 */
console.log("if/else:", status_color_if_else(status));
console.log("switch:", status_color_switch(status));
console.log("objeto:", status_color_object(status));

console.log(led.getCurrentColor());
