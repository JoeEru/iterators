//generator func which will alwz return a uniq ID
function* uniqeID() {
  while (true) {
    yield Math.random();
  }
}

console.log(uniqeID().next().value);
console.log(uniqeID().next().value);
console.log(uniqeID().next().value);

function* main() {
  for (let i = 0; i < 8; i++) yield i;
}

console.log([...main()]);

for (v of main()) {
  console.log(v);
}

//maing an object iterable using generators
const obj = {
  *[Symbol.iterator]() {
    let index = this.start,
      end = this.end;
    while (index < end) {
      yield this.values[index];
      index++;
    }
  },
  values: [1, 22, 33, 55, 44, 12, 43, 56, 99, 12, 34, 34],
  start: 2,
  end: 8
};

console.log([...obj]);

for (v of obj) {
  console.log(v);
}
