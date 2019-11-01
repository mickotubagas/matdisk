console.log("perhitungan faktorial")
var inkey = require('readline-sync');
var faktor = 1;
var nilai = 0;
var nilai = parseInt(inkey.question("masukan nilai = "));

for (var i=1; i<=nilai; i++){
    faktor = i*faktor;
}
console.log("faktorial dari " +nilai+ " adalah = " +faktor);
console.log("================================================================");
console.log("by : Micko_Tubagas - 20190801086");
