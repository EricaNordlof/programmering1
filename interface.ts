// Övningar på att skapa objekt med interface i TypeScript
// Erica Nordlöf

// 1. Skapa ett interface för en person
interface Person {
  namn: string;
  alder: number;
  kon: string;
}

const person: Person = {
  namn: "Erica",
  alder: 40,
  kon: "Kvinna"
};

console.log(person);


// 2. Skapa ett interface för en geometrisk figur
interface GeometriskFigur {
  typ: string;
  radie?: number;
  sidolangd?: number;
}

const cirkel: GeometriskFigur = {
  typ: "Cirkel",
  radie: 5
};

const kvadrat: GeometriskFigur = {
  typ: "Kvadrat",
  sidolangd: 4
};

console.log(cirkel);
console.log(kvadrat);


// 3. Skapa ett interface för en anställd
interface Anstalld {
  namn: string;
  id: number;
  avdelning: string;
}

const anstalld1: Anstalld = {
  namn: "Anna Andersson",
  id: 101,
  avdelning: "IT"
};

const anstalld2: Anstalld = {
  namn: "Johan Svensson",
  id: 102,
  avdelning: "Ekonomi"
};

const anstalld3: Anstalld = {
  namn: "Sara Nilsson",
  id: 103,
  avdelning: "Kundservice"
};

console.log(anstalld1);
console.log(anstalld2);
console.log(anstalld3);


// 4. Skapa ett interface för en bil
interface Bil {
  marke: string;
  modell: string;
  arsmodell: number;
}

const bil: Bil = {
  marke: "Volvo",
  modell: "XC60",
  arsmodell: 2022
};

console.log(bil);


// 5. Skapa ett interface för en produkt
interface Produkt {
  namn: string;
  pris: number;
  tillganglig: boolean;
  kategori: string;
}

const produkt1: Produkt = {
  namn: "Laptop",
  pris: 9999,
  tillganglig: true,
  kategori: "Elektronik"
};

const produkt2: Produkt = {
  namn: "T-shirt",
  pris: 249,
  tillganglig: true,
  kategori: "Kläder"
};

const produkt3: Produkt = {
  namn: "Mjölk",
  pris: 18,
  tillganglig: false,
  kategori: "Livsmedel"
};

console.log(produkt1);
console.log(produkt2);
console.log(produkt3);
