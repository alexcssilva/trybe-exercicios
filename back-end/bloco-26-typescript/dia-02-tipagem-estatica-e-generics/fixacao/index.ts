// Crie um type para um objeto que represente um pássaro.

type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
};

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.

type Sum = (x: number, y: number) => number;

// Crie um type para um objeto que represente um endereço.

type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
};


// Type Unions

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.

type physicalStates = "liquid" | "solid" | "gaseous";

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.

type IdentifyingDocument = string | number;
 
// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

type SO = "linux" | "mac os" | "windows";

// Crie um type union que represente as vogais do alfabeto.

type Vowels = "a" | "e" | "i" | "o" | "u";

// Classes

// Crie uma classe cujo objeto represente um Cachorro.

class Dog {
  name: string;
  color: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  bark(): void {
    console.log("Au Au");
  }
}

// Crie uma classe cujo objeto represente uma Casa.

class House {
  owner: string;
  address: string;
  color: string;
  area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this.owner = owner;
    this.address = address;
    this.color = color;
    this.area = area;
  }
}

// Crie uma classe cujo objeto represente um Voo.

class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;


  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  }
}

// Interfaces

// Crie uma interface cujo objeto represente um Automóvel.

interface Automobile {
  name: string;
  brand: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

// Crie uma interface cujo objeto represente um Felino.

interface Feline {
  name: string;
  subfamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

// Crie uma interface cujo objeto represente uma Aeronave.

interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}