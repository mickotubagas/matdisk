var inkey = require('readline-sync')

var Nilai = parseInt(inkey.question(" Masukan Nilai : "));

if (Nilai > 70){
   console.log("LULUS");
}

else 
{
    console.log("TIDAK LULUS");
}