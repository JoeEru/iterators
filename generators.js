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

//numbers object with an iterable method
const numbers = {
  *[Symbol.iterator]({ step = 1, start = 0, end = 100 } = {}) {
    for (let i = start; i <= end; i += step) yield i;
  }
};

//should print from 0 to 100 by 1step
for (let num of numbers) {
  console.log(num);
}

console.log("--------------------");

//should print from 6 to 40 by 2steps
for (let num of numbers[Symbol.iterator]({
  step: 2,
  start: 6,
  end: 40
})) {
  console.log(num);
}
