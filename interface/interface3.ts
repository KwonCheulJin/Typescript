interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p3_1: Person3 = {
  name: 'Mark',
  age: 30,
};

const p3_2: Person3 = {
  name: 'Charles',
  sisters: ['Sung', 'Chan'],
};

hello3(p3_2);
