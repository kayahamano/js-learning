const total = 3000;
const people = 3;
const perPerson = total / people;

console.log(perPerson);

document.getElementById("result").textContent = `一人当たりの支払いは ${perPerson} 円です。`;
