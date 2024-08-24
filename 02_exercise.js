// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const firstPointsList = [32, 54, 21, 64, 75, 43];

const copiedFirstPointsList = [...firstPointsList];

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const FirstToy = {
  name: "Bus laiyiar",
  date: "20-30-1995",
  color: "multicolor",
};

const copiedFirstToy = { ...FirstToy };

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const combPointsList = [...pointsList, ...pointsLis2];

// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const combToys = { ...toy, ...toyUpdate };

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const newColors = [...colors.slice(0, 2), ...colors.slice(3)];
