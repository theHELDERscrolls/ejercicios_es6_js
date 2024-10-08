// 3.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const allUserNames = users.map((user) => user.name);
console.log(allUserNames);

// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const usuarios = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const allUsuariosName = usuarios.map((usuario) => {
  if (usuario.name.startsWith("A")) {
    return "Anacleto";
  } else {
    return usuario.name;
  }
});

console.log(allUsuariosName);

// 3.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitedCities = cities.map((city) => {
  if (city.isVisited === true) {
    return city.name + " - Visitado";
  } else {
    return city.name + " - Pendiente";
  }
});
console.log(visitedCities);
