const kokugo = 100;
const sansu = 50;
const rika = 40;
const shakai = 70;
const eigo = 80;

const goukei = kokugo + sansu + rika + shakai + eigo;

console.log(goukei);

document.getElementById("result").textContent = `合計点は ${goukei} 点です。`;
