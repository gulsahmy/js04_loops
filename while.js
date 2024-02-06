

let i = 1
while (i<= 10) {
    console.log(i, "Cohort16");
    i++
}

console.log("Dongu bitti");

console.log("**************");

for ( let i = 1; i<=10; i++) {
    console.log(i , "Cohort16");
}

console.log("dongü bitti");

// let sayi = +prompt("0-100 arasında bir sayı giriniz:")
// if (sayi < 0 || sayi > 100) {
//     alert("Sayi 0-100 arasında değil")
// }

// let sayi1 = +prompt("0-100 arasinda bir sayi giriniz:")
// let exit = false

// while ( sayi1 < 0 || sayi1 > 100) {
//     console.log("Girilen sayi 0-100 arasinda olmalidir");
//     sayi1 = prompt("0-100 arasinda bir sayi giriniz veya çikmak için Q tuşuna basiniz:")

//     if (sayi1 === "q") {
//         exit = true
//         break
//     }
// }
//     exit ? console.log("Cikis yapildi") : console.log("Girilen sayi:", sayi1);

let sayi2 = +prompt("0-100 arasinda bir sayi giriniz:")
let cikis1 = false  //?Flag mechanism
for ( ; sayi2 < 0 || sayi2 > 100; ) {
    console.log("Girilen sayi 0-100 arasinda olmalidir");
    sayi2 = prompt ("0-100 arasinda bir sayi giriniz veya cikmak icin Q tusuna basiniz")

    if (sayi2 === "q"){
        cikis1 = true
        break
    }
}



    cikis1 ? console.log("Cikis yapildi") : console.log("Girilen sayi:", sayi2);