const participants = 12541;

const pairSize = 3;

const remainder = participants % pairSize;

console.log(remainder)

document.getElementById("result").textContent = `余りは ${remainder} 人です`;