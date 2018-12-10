//making an object iterable
const obj = {
  [Symbol.iterator]() {
    let index = this.start,
      end = this.end;
    const it = {
      next: () => {
        if (index <= end) {
          const value = this.values[index];
          index++;
          return {
            value,
            done: false
          };
        }

        return { done: true };
      }
    };
    return it;
  },
  values: [1, 22, 33, 55, 44, 12, 43, 56, 99, 12, 34, 34],
  start: 2,
  end: 8
};

//using the spread operator
console.info("spread operator");
console.log([...obj]);

//using for of loops
console.info("for of loops");
for (const value of obj) {
  console.log(value);
}
