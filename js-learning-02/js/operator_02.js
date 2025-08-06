const allowance = 1000;
const choco = 150;
const ice = 200;

const remaining = allowance - choco - ice;

console.log(remaining);

document.getElementById("result").textContent = `残りのお小遣いは ${remaining}円です。`;
