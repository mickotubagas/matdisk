console.log("Determinan Matriks A");
console.log("================================================================");
console.log("A = -1 2 3");
console.log("     4 5 6");
console.log("     7 8 9");
console.log("================================================================");

var A = [[-1,2,3],[4,5,6],[7,8,9]];

var h1a = A[0][0]*A[1][1]*A[2][2];
console.log(" -1 x 5 x 9 =" +h1a);
var h1b = A[0][1]*A[1][2]*A[2][0];
console.log("  2 x 6 x 7 = " +h1b);
var h1c = A[0][2]*A[1][0]*A[2][1];
console.log("  3 x 4 x 8 = " +h1c);

var h2a = A[2][0]*A[1][1]*A[0][2];
console.log("  7 x 5 x 3 = " +h2a);
var h2b = A[2][1]*A[1][2]*A[0][0];
console.log("  8 x 6 x-1 =" +h2b);
var h2c = A[2][2]*A[1][0]*A[0][1];
console.log("  9 x 4 x 2 = " +h2c);

console.log("================================================================");
var hasil1 = h1a + h1b + h1c;
console.log("penjumlahan kali silang atas  = " +h1a+ " +  " +h1b+ " + " +h1c+ " = " +hasil1);
var hasil2 = h2a + h2b + h2c;
console.log("penjumlahan kali silang bawah = " +h2a+ " + " +h2b+ " + " +h2c+ " = " +hasil2);
console.log("================================================================");
var hasil = hasil1 - hasil2;
console.log("Determinan = kali silang atas - kali silang bawah");
console.log("           = " +hasil1+ " - " +hasil2);
console.log("           = " +hasil);
console.log("================================================================");
console.log("by : Micko_Tubagas - 20190801086");