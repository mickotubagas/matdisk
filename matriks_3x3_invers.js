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

var hasildet = hasil1 - hasil2;
console.log("Determinan = kali silang atas - kali silang bawah");
console.log("           = " +hasil1+ " - " +hasil2);
console.log("           = " +hasildet);

console.log("================================================================");

console.log("mencari MINOR matriks A : ");
var m11 = ((A[1][1]*A[2][2])-(A[2][1]*A[1][2]));
var m12 = ((A[1][0]*A[2][2])-(A[2][0]*A[1][2]));
var m13 = ((A[1][0]*A[2][1])-(A[2][0]*A[1][1]));

var m21 = ((A[0][1]*A[2][2])-(A[2][1]*A[0][2]));
var m22 = ((A[0][0]*A[2][2])-(A[2][0]*A[0][2]));
var m23 = ((A[0][0]*A[2][1])-(A[2][0]*A[0][1]));

var m31 = ((A[0][1]*A[1][2])-(A[1][1]*A[0][2]));
var m32 = ((A[0][0]*A[1][2])-(A[1][0]*A[0][2]));
var m33 = ((A[0][0]*A[1][1])-(A[1][0]*A[0][1]));

console.log(" minor11 = " +m11);
console.log(" minor12 = " +m12);
console.log(" minor13 = " +m13);

console.log(" minor21 = " +m21);
console.log(" minor22 = " +m22);
console.log(" minor23 = " +m23);

console.log(" minor31 = " +m31);
console.log(" minor32 = " +m32);
console.log(" minor33 = " +m33);

console.log("================================================================");

console.log("mencari KOFAKTOR matriks A : ");
var k11 = m11;
var k12 = (m12*-1);
var k13 = m13;
var k21 = (m21*-1);
var k22 = m22;
var k23 = (m23*-1);
var k31 = m31;
var k32 = (m32*-1);
var k33 = m33;

console.log(" kofaktor11 = " +k11);
console.log(" kofaktor12 = " +k12);
console.log(" kofaktor13 = " +k13);

console.log(" kofaktor21 = " +k21);
console.log(" kofaktor22 = " +k22);
console.log(" kofaktor23 = " +k23);

console.log(" kofaktor31 = " +k31);
console.log(" kofaktor32 = " +k32);
console.log(" kofaktor33 = " +k33);

console.log("================================================================");

console.log("mencari ADJOIN matriks A : ");
var ad11 = k11;
var ad12 = k21;
var ad13 = k31;
var ad21 = k12;
var ad22 = k22;
var ad23 = k32;
var ad31 = k13;
var ad32 = k23;
var ad33 = k33;

console.log(" adjoin11 = " +ad11);
console.log(" adjoin12 = " +ad12);
console.log(" adjoin13 = " +ad13);

console.log(" adjoin21 = " +ad21);
console.log(" adjoin22 = " +ad22);
console.log(" adjoin23 = " +ad23);

console.log(" adjoin31 = " +ad31);
console.log(" adjoin32 = " +ad32);
console.log(" adjoin33 = " +ad33);

console.log("================================================================");

console.log("mencari INVERS matriks A : ");
var invers11 = ad11 / hasildet;
var invers12 = ad12 / hasildet;
var invers13 = ad13 / hasildet;
var invers21 = ad21 / hasildet;
var invers22 = ad22 / hasildet;
var invers23 = ad23 / hasildet;
var invers31 = ad31 / hasildet;
var invers32 = ad32 / hasildet;
var invers33 = ad33 / hasildet;

console.log(" invers11 = " +invers11);
console.log(" invers12 = " +invers12);
console.log(" invers13 = " +invers13);

console.log(" invers21 = " +invers21);
console.log(" invers22 = " +invers22);
console.log(" invers23 = " +invers23);

console.log(" invers31 = " +invers31);
console.log(" invers32 = " +invers32);
console.log(" invers33 = " +invers33);

console.log("================================================================");
console.log("A invers = Adjoin : Determinan");
console.log("         = " +invers11+ "           " +invers12+ "                         " +invers13);
console.log("            " +invers21+ "            " +invers22+ "                          " +invers23);
console.log("           " +invers31+ "           " +invers32+ "        " +invers33);
console.log("================================================================");
console.log("by : Micko_Tubagas - 20190801086");