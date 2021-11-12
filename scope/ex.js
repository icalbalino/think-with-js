// scope
var siswa = "aril"
function mahasiswa() {
    siswa = "aldi"
    nim = 672019000
    console.log('teknik informatika')
}
mahasiswa()
console.log(siswa);
console.log(nim)

// function expression
// var value = function mahasiswi(nama, ipk) { return nama + ipk }
var value = function(nama, ipk) { return nama + " " + ipk }
console.log(value("aril, ipk = ", 3.7))

// arrow function
const arr = [1, 2, 3, 4, 5]
const obj = [{ nama: "ical", id: 12 }]
var value = arr.map(hitung => hitung)
// var v = obj.map(hitung => hitung.id)
// v = obj.map(function hitung(item) {
//     return item.id
// })
// console.log(value,v)

// Function Scoping: IIFE
// isolated and executed
var anak = 'cindy';
(function anakanak() {
    var anak = 'gres'
    anak = 'mia'
    console.log(anak)
})()
console.log(anak)

// Block Scoping
// Instead of an IIFE
// Block Scoping: encapsulation
var wali = 'pak butet'
{
    let wali = 'pak isten'
    console.log(wali)
}
console.log(wali)

// Block Scoping: let
// function add(x,y) {
//     if (x > y) {
//         let temp = x
//         x = y
//         y = temp
//         console.log(temp);
//     }
//     return y - x;
// }
// console.log(add(9, 7))

// Block Scoping: let + var
function add(angka1, angka2) {
    return angka1 + angka2
}
function repeat(fn, n) {
    var result = 0
    for (let index = 0; index < n; index++) {
        result = fn(result, index)
    }
    return result
}
console.log(repeat(add, 5))

// Block Scoping: explicit let block
function formatStr(str) {
    { 
        let prefix, rest;
        // slice the substring from index start to end
        prefix = str.slice(0, 3)
        rest = str.slice(3)
        str = prefix.toUpperCase() + rest
        console.log(str)
    }
    // if (/^FOO:/.test(str)) {
    //     console.log(str)
    // }
    console.log(str.slice(4));
}
formatStr('javascript keren banget')

// Closure 
function bertanya(pertanyaan) {
    setTimeout(function tunggu() {
        console.log(pertanyaan)
    }, 1000)
    // console.log(pertanyaan)
}
bertanya('lama?')

function bertanya2(pertanyaan) {
    return (function tahan() { console.log(pertanyaan) })()
}
bertanya2("masih ada?")
// var simpan = bertanya2("masih ada?");
// console.log(simpan)

