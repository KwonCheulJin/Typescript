interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p4_1: Person4 = {
  name: 'Mark',
  age: 43,
  hello: function (): void {
    console.log(`${this.name}`);
  },
};
const p4_2: Person4 = {
  name: 'Mark',
  age: 43,
  hello(): void {
    console.log(`${this.name}`);
  },
};
// const p4_3: Person4 = {
//   name: "Mark",
//   age: 43,
//   hello: (): void =>  {
//     console.log(`${this.name}`)
//   }
// }
