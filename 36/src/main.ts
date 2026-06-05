import { question01, question02, question03 } from "./exercise.js";

const value01 = question01(100, [
  { id: 1, volume: 40 },
  { id: 2, volume: 30 },
  { id: 3, volume: 25 },
  { id: 4, volume: 20 },
  { id: 5, volume: 15 },
]);
const value02 = question02(
  7,
  [
    {
      name: "Museu",
      time: 2,
      value: 10,
    },
    {
      name: "Torre",
      time: 5,
      value: 18,
    },
    {
      name: "Parque",
      time: 1,
      value: 8,
    },
    {
      name: "Castelo",
      time: 3,
      value: 12,
    },
  ],
  8,
);
const value03 = question03(
  ["MT", "RJ", "ES", "SP", "SC", "RS", "PR", "MS"],
  [
    { name: "Kum", coverage: ["SP", "SC", "RS"] },
    { name: "Kdois", coverage: ["RJ", "SP", "MT"] },
    { name: "Ktres", coverage: ["ES", "SC", "PR"] },
    { name: "Kquatro", coverage: ["SC", "RS"] },
    { name: "Kcinco", coverage: ["PR", "MS"] },
  ],
);

console.log("Valor da questão 01: " + value01.totalVolume);
// Nao é a melhor solução, exemplo: 40 + 25 + 20 + 15 = 100, mas o resultado é 95

console.log("Valor da questão 02: " + value02.totalPoints);
console.log("Valor da questão 02 (dias utilizados): " + value02.daysUsed);
// não é a melhor, nesse caso ele faz tudo que da, mas nao vai ser a mlehor solucao sempre

console.log("Valor da questão 03: " + value03.map((s) => s.name).join(", "));
