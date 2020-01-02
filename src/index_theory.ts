class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender
  }
}

const youngju = new Human("Youngju", 20, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you ar ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(youngju));

export { };