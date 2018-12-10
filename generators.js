function* uniqID() {
  while (true) {
    yield Math.random();
  }
}

console.log(uniqID().next().value);
console.log(uniqID().next().value);
console.log(uniqID().next().value);
