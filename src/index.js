class Animals {
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
    this.age = options.age;
    this.weight = options.weight;
  }

  get greetings() {
    return `Hi my name is ${this.name}. I'm ${this.age}`;
  }
}

class Cat extends Animals {
  constructor(options) {
    super(options);
    this.porodo = options.porodo;
  }
}

const sira = new Cat({
  name: "Sira",
  age: 2,
  color: "orange",
  weight: 2,
  porodo: "British ShortHair",
});

console.log(sira);
