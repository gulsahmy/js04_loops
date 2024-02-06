

console.log("******FOR******");

// for (let i = 1; i <=50; i++){
//     console.log(i);
// }

// console.clear()

// let sum = 0
// let i = 0
// for (i; i < 5; i++){
//     const grade = Number(prompt(`Enter ${i+1}. grade:`))
//     sum = sum + grade
//     console.log(sum);
// }

// console.log(i);
// console.log(`AVG:${sum / i}`);

const n1 = 3
const n2 = 5
let sum = 0

if (n1>n2){
    console.log("n2 sholud be bigger than n1");

}
else {
    for (let i =n1; i <=n2; i++)
    sum += i
}

console.log("SUM:", sum);

for ( let i =0; i <= 10; i++ ) {
    if (i % 3) {
        continue
    }
    if (i === 6) {
        break
    }
    console.log(i);
}