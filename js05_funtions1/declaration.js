

// function selamla() {
//     console.log("Selam Cohort16");
// }

// selamla()

// function selamVer(mesaj) {
//     console.log(`Merhaba ${mesaj}`);
// }

// selamVer("Cohort16")
// selamVer("Cohort17")
// selamVer("Cohort18")
// selamVer("Javascript")


// function selamVer(cohort, ders) {
//     console.log(`Merhaba ${cohort} - ${ders}`);
// }

// selamVer("Cohort16", "Javascript")
// selamVer("Cohort15", "CSS")

// function topla(s1, s2) {
//     console.log("Toplam:", s1 + s2);
// }

// const num1 = +prompt("S1:")
// const num2 = +prompt("S2:")
// topla(num2, num1)
console.clear()

// function carp(num1, num2) {
//     // console.log(num1 * num2);
//     return num1 * num2
// }

// const sonuc = carp(3,5)
// console.log(sonuc);


//*******************************************

function hesapla(num1, num2, islem) {
    if (islem === "+"){
        return num1 + num2
    } else if (islem === "-") {
        return num1 - num2
    } else {
        return 0
    }
}

const sonuc = hesapla(3,5,"+")
console.log(sonuc);

console.log(hesapla(4,2,"-"));
