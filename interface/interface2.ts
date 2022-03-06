interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 임니다.`);
}

hello2({ name: 'Mark', age: 30 });
hello2({ name: 'Charled' });
