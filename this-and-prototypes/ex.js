// this keyword
var test = {
    v: "hallo",
    v2: "hai",
    value: function tanya(pertanyaan) {
        console.log(this.v, pertanyaan);
    },
    tanya1(pertanyaan) {
        console.log(this.v2, pertanyaan);
    },
}
// implicit binding
test.tanya1("dunia")
test.value("ical");
test.value.call(test, "kau")

function satu(tanya1) {
    console.log(this.p, tanya1)
}
function dua() {
    var konteks = {
        p: "hei"
    }
    // explicit binding
    satu.call(konteks, "kamu")
}
dua()

/** 
 * another way of invoking a function that tells it, 
 * invoke that function tanya() and use. the test{} object as the this keyword. 
 * jadi ketika dikatakan this.v itu akan menemukan test sebagai nilai dan mengeluarkan v dengan nilai "halo"
 * .call() that's called an explicit binding 
**/


// prototypes system

// prototype
//instances called workshop class
// workshop.prototype.salam = function (m) {
//     console.log(this.p, m);
// }

// constructor
// function workshop(p) {
//     this.p = p
// }

// var vueJS = new workshop("syalom")
// var nuxtJS = new workshop("aloha");

// vueJS.salam("semuanya")
// nuxtJS.salam("damai")

/**
 * to add methods into the definition of workshop class
 * add them to the prototype of the workshop constructor.
 * 
 * prototype means that it is an object where any instances are going to be linked to or to delegate to.
 * 
 * the new keyword is gonna invoke that workshop function
 * and the object that gets created is going to be linked to workshop.prototype.
 * 
 * vueJS dan nuxtJS tidak punya method salam, tetapi linked dengan workshop.prototype
 * ketika kita sebut vueJS.salam/nuxtJS.salam itu akan melimpahkan/menyerahkan 
 * naik satu tingkat dari vueJS.salam/nuxtJS.salam ke workshop.prototype
 * lihat bagaimana saat method salam dipanggil di dalam this konteks pada object vueJS/nuxtJS
*/


// class
class workshop {
    constructor(p) {
        this.p = p
    }
    salam(m) {
      console.log(this.p, m)  
    }
}
var vueJS = new workshop("priviet");
var nuxtJS = new workshop("bonjour");
vueJS.salam("vsem")
nuxtJS.salam("salute")
