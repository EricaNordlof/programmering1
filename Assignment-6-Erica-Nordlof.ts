// Assignment 6 – Övningar på if-satser i TypeScript
// Erica Nordlöf

// 1. Kontroll av talstorlek
let tal1: number = 10;
let tal2: number = 20;

if (tal1 > tal2) {
  console.log(`${tal1} är störst`);
} else if (tal2 > tal1) {
  console.log(`${tal2} är störst`);
} else {
  console.log("Talen är lika stora");
}

// 2. Kontroll av temperatur
let temperatur: number = 28;

if (temperatur > 25) {
  console.log("Det är varmt idag");
} else {
  console.log("Det är svalt idag");
}

// 3. Kontroll av bokstav
let bokstav: string = "a";

if (
  bokstav === "a" ||
  bokstav === "e" ||
  bokstav === "i" ||
  bokstav === "o" ||
  bokstav === "u" ||
  bokstav === "y" ||
  bokstav === "å" ||
  bokstav === "ä" ||
  bokstav === "ö"
) {
  console.log("Bokstaven är en vokal");
} else {
  console.log("Bokstaven är en konsonant");
}
