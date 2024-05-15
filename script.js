// ex3
rowPattern = ''
for (let i = 1; i<6 ;i++){
    console.log("* ".repeat(i));
}
console.log(rowPattern);

// ex4
let xValue = 10;
while (xValue > 0) {
    console.log(xValue);
    xValue -= 0.5;
}

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
// }

let i = 1;
while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}

let j = 0
let m = 6;
while (j < m) {
    j++
    console.log(`[${j}]`);
}


let a = 1;
let sum = 0;
let n = 5;
while (a <= n) {
    sum += a;
    a++;
}
console.log(sum);
