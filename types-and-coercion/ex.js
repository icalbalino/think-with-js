//primitive types

var value
value = "ical"
// value = 19
// value = true
// value = { nama: "ical", umur: 19 }
// value = Symbol()
// //-------------------------------------------------
// value = null
// value = [1, 2, 3] //subtype of object
// value = function () { } //subtype of object
// console.log(typeof (value))

//---------------------------------------------------
// not a number (NaN)
// var v = value / 2
// console.log(v)
// console.log(Number.isNaN(v))

//---------------------------------------------------
// new
// var tanggal = new Date("june 20, 2021")
// console.log(tanggal.toUTCString());

//---------------------------------------------------
// converting types (coercion)
// Coercion: string concatenation (number to string)
var pesan1 = "hallo, "
var v = 19
var pesan2 = " ical balino"
console.log(pesan1 + v + pesan2)
console.log(`hallo, ${v + ""} ical balino`)

//Coercion: string to number
function addValue(value) {
    return value + 1
}
const test = "13"
const p = addValue(Number(test))
console.log(p);

//Coercion: boolean
// if (!test /**!!test*/) {
//     console.log(p);
// } else {
//     console.log('itu angka')
// }

// if (Number(test) < Number(v)) {
//     console.log(p);
// }
// Coercion: implicit can be good (sometimes)
// if (test < v) {
//     console.log(p);
// }

//Checking Equality ( == vs. === )
var siswa = { nama: null }
var siswi = {}

var angka = 1
var huruf = '1'

if (angka === huruf /**siswa.nama == null && siswi.nama == undefined */) {
    console.log('benar')
} else {
    console.log('salah')
}
