var inkey = require('readline-sync')

var Nilai = parseInt(inkey.question("Masukan Nilai :"));

if (Nilai >= 80){
    console.log("Nilai A");
}

else if ((Nilai > 69) && (Nilai < 80)){
    console.log("Nilai B");
}

else {
    console.log("Nilai C");
}