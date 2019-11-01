console.log("Determinan Matriks A");
console.log("================================================================");
console.log("A = -1  2  3  4");
console.log("     5  6  7  8");
console.log("     9  10 11 12");
console.log("     13 14 15 16");
console.log("================================================================");

var A = [[-1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

var a1a = (A[0][0]*A[1][1]*A[2][2]*A[3][3])
var a1b = (A[0][1]*A[1][2]*A[2][3]*A[3][0])
var a1c = (A[0][2]*A[1][3]*A[2][0]*A[3][1])
var a1d = (A[0][3]*A[1][0]*A[2][1]*A[3][2])

var a2a = (A[0][0]*A[1][3]*A[2][2]*A[3][1])
var a2b = (A[0][1]*A[1][0]*A[2][3]*A[3][2])
var a2c = (A[0][2]*A[1][1]*A[2][0]*A[3][3])
var a2d = (A[0][3]*A[1][2]*A[2][1]*A[3][0])

var hasil1 = a1a-a1b+a1c-a1d-a2a+a2b-a2c+a2d
console.log("deta = "+a1a+" - "+a1b+" + "+a1c+" - "+a1d+" - "+a2a+" + "+a2b+" - "+a2c+" + "+a2d+" = "+hasil1)

var b1a = (A[0][0]*A[1][1]*A[2][3]*A[3][2])
var b1b = (A[0][1]*A[1][2]*A[2][0]*A[3][3])
var b1c = (A[0][2]*A[1][3]*A[2][1]*A[3][0])
var b1d = (A[0][3]*A[1][0]*A[2][2]*A[3][1])

var b2a = (A[0][0]*A[1][3]*A[2][1]*A[3][2])
var b2b = (A[0][1]*A[1][0]*A[2][2]*A[3][3])
var b2c = (A[0][2]*A[1][1]*A[2][3]*A[3][0])
var b2d = (A[0][3]*A[1][2]*A[2][0]*A[3][1])

var hasil2 = -b1a+b1b-b1c+b1d+b2a-b2b+b2c-b2d
console.log("detb = -"+b1a+" + "+b1b+" - "+b1c+" + "+b1d+" + "+b2a+" - "+b2b+" + "+b2c+" - "+b2d+" = "+hasil2)

var c1a = (A[0][0]*A[1][2]*A[2][3]*A[3][1])
var c1b = (A[0][1]*A[1][3]*A[2][0]*A[3][2])
var c1c = (A[0][2]*A[1][0]*A[2][1]*A[3][3])
var c1d = (A[0][3]*A[1][1]*A[2][2]*A[3][0])

var c2a = (A[0][0]*A[1][2]*A[2][1]*A[3][3])
var c2b = (A[0][1]*A[1][3]*A[2][2]*A[3][0])
var c2c = (A[0][2]*A[1][0]*A[2][3]*A[3][1])
var c2d = (A[0][3]*A[1][1]*A[2][0]*A[3][2])

var hasil3 = c1a-c1b+c1c-c1d-c2a+c2b-c2c+c2d
console.log("detc = "+c1a+" - "+c1b+" + "+c1c+" - "+c1d+" - "+c2a+" + "+c2b+" - "+c2c+" + "+c2d+ " = "+hasil3)

console.log("================================================================");
var hasildet = hasil1+hasil2+hasil3;
console.log("Determinan = Det a + Det b + Det c");
console.log("           = " +hasil1+ " + " +hasil2+ " + " +hasil3);
console.log("           = " +hasildet);
console.log("================================================================");
console.log("by : Micko_Tubagas - 20190801086");