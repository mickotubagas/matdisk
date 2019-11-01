console.log("Determinan Matriks A");
console.log("================================================================");
console.log("A = 1  3  5  1");
console.log("    10 2  3  2");
console.log("    4  7  5  2");
console.log("    2  2  5  1");
console.log("================================================================");

var A = [[1,3,5,1],[10,2,3,2],[4,7,5,2],[2,2,5,1]];

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
var hasildet = hasil1 + hasil2 + hasil3;
console.log("Determinan = Det a + Det b + Det c");
console.log("           = " +hasil1+ " + " +hasil2+ " + " +hasil3);
console.log("           = " +hasildet);

console.log("================================================================");

console.log("mencari MINOR matriks A : ");

var m1a = [[2,3,2],[7,5,2],[2,5,1]];

var mh1aa = m1a[0][0]*m1a[1][1]*m1a[2][2];
var mh1ba = m1a[0][1]*m1a[1][2]*m1a[2][0];
var mh1ca = m1a[0][2]*m1a[1][0]*m1a[2][1];

var mh2aa = m1a[2][0]*m1a[1][1]*m1a[0][2];
var mh2ba = m1a[2][1]*m1a[1][2]*m1a[0][0];
var mh2ca = m1a[2][2]*m1a[1][0]*m1a[0][1];

var mhasil1a = mh1aa + mh1ba + mh1ca;
var mhasil2a = mh2aa + mh2ba + mh2ca;
var m11 = mhasil1a - mhasil2a;
console.log(" minor11 = " +m11);

var m2a = [[10,3,2],[4,5,2],[2,5,1]];

var mh1ab = m2a[0][0]*m2a[1][1]*m2a[2][2];
var mh1bb = m2a[0][1]*m2a[1][2]*m2a[2][0];
var mh1cb = m2a[0][2]*m2a[1][0]*m2a[2][1];

var mh2ab = m2a[2][0]*m2a[1][1]*m2a[0][2];
var mh2bb = m2a[2][1]*m2a[1][2]*m2a[0][0];
var mh2cb = m2a[2][2]*m2a[1][0]*m2a[0][1];

var mhasil1b = mh1ab + mh1bb + mh1cb;
var mhasil2b = mh2ab + mh2bb + mh2cb;
var m12 = mhasil1b - mhasil2b;
console.log(" minor12 = " +m12);

var m3a = [[10,2,2],[4,7,2],[2,2,1]];

var mh1ac = m3a[0][0]*m3a[1][1]*m3a[2][2];
var mh1bc = m3a[0][1]*m3a[1][2]*m3a[2][0];
var mh1cc = m3a[0][2]*m3a[1][0]*m3a[2][1];

var mh2ac = m3a[2][0]*m3a[1][1]*m3a[0][2];
var mh2bc = m3a[2][1]*m3a[1][2]*m3a[0][0];
var mh2cc = m3a[2][2]*m3a[1][0]*m3a[0][1];

var mhasil1c = mh1ac + mh1bc + mh1cc;
var mhasil2c = mh2ac + mh2bc + mh2cc;
var m13 = mhasil1c - mhasil2c;
console.log(" minor13 = " +m13);

var m4a = [[10,2,3],[4,7,5],[2,2,5]];

var mh1ad = m4a[0][0]*m4a[1][1]*m4a[2][2];
var mh1bd = m4a[0][1]*m4a[1][2]*m4a[2][0];
var mh1cd = m4a[0][2]*m4a[1][0]*m4a[2][1];

var mh2ad = m4a[2][0]*m4a[1][1]*m4a[0][2];
var mh2bd = m4a[2][1]*m4a[1][2]*m4a[0][0];
var mh2cd = m4a[2][2]*m4a[1][0]*m4a[0][1];

var mhasil1d = mh1ad + mh1bd + mh1cd;
var mhasil2d = mh2ad + mh2bd + mh2cd;
var m14 = mhasil1d - mhasil2d;
console.log(" minor14 = " +m14);

var m5a = [[3,5,1],[7,5,2],[2,5,1]];

var mh1ae = m5a[0][0]*m5a[1][1]*m5a[2][2];
var mh1be = m5a[0][1]*m5a[1][2]*m5a[2][0];
var mh1ce = m5a[0][2]*m5a[1][0]*m5a[2][1];

var mh2ae = m5a[2][0]*m5a[1][1]*m5a[0][2];
var mh2be = m5a[2][1]*m5a[1][2]*m5a[0][0];
var mh2ce = m5a[2][2]*m5a[1][0]*m5a[0][1];

var mhasil1e = mh1ae + mh1be + mh1ce;
var mhasil2e = mh2ae + mh2be + mh2ce;
var m21 = mhasil1e - mhasil2e;
console.log(" minor21 = " +m21);

var m6a = [[1,5,1],[4,5,2],[2,5,1]];

var mh1af = m6a[0][0]*m6a[1][1]*m6a[2][2];
var mh1bf = m6a[0][1]*m6a[1][2]*m6a[2][0];
var mh1cf = m6a[0][2]*m6a[1][0]*m6a[2][1];

var mh2af = m6a[2][0]*m6a[1][1]*m6a[0][2];
var mh2bf = m6a[2][1]*m6a[1][2]*m6a[0][0];
var mh2cf = m6a[2][2]*m6a[1][0]*m6a[0][1];

var mhasil1f = mh1af + mh1bf + mh1cf;
var mhasil2f = mh2af + mh2bf + mh2cf;
var m22 = mhasil1f - mhasil2f;
console.log(" minor22 = " +m22);

var m7a = [[1,3,1],[4,7,2],[2,2,1]];

var mh1ag = m7a[0][0]*m7a[1][1]*m7a[2][2];
var mh1bg = m7a[0][1]*m7a[1][2]*m7a[2][0];
var mh1cg = m7a[0][2]*m7a[1][0]*m7a[2][1];

var mh2ag = m7a[2][0]*m7a[1][1]*m7a[0][2];
var mh2bg = m7a[2][1]*m7a[1][2]*m7a[0][0];
var mh2cg = m7a[2][2]*m7a[1][0]*m7a[0][1];

var mhasil1g = mh1ag + mh1bg + mh1cg;
var mhasil2g = mh2ag + mh2bg + mh2cg;
var m23 = mhasil1g - mhasil2g;
console.log(" minor23 = " +m23);

var m8a = [[1,3,5],[4,7,5],[2,2,5]];

var mh1ah = m8a[0][0]*m8a[1][1]*m8a[2][2];
var mh1bh = m8a[0][1]*m8a[1][2]*m8a[2][0];
var mh1ch = m8a[0][2]*m8a[1][0]*m8a[2][1];

var mh2ah = m8a[2][0]*m8a[1][1]*m8a[0][2];
var mh2bh = m8a[2][1]*m8a[1][2]*m8a[0][0];
var mh2ch = m8a[2][2]*m8a[1][0]*m8a[0][1];

var mhasil1h = mh1ah + mh1bh + mh1ch;
var mhasil2h = mh2ah + mh2bh + mh2ch;
var m24 = mhasil1h - mhasil2h;
console.log(" minor24 = " +m24);

var m9a = [[3,5,1],[2,3,2],[2,5,1]];

var mh1ai = m9a[0][0]*m9a[1][1]*m9a[2][2];
var mh1bi = m9a[0][1]*m9a[1][2]*m9a[2][0];
var mh1ci = m9a[0][2]*m9a[1][0]*m9a[2][1];

var mh2ai = m9a[2][0]*m9a[1][1]*m9a[0][2];
var mh2bi = m9a[2][1]*m9a[1][2]*m9a[0][0];
var mh2ci = m9a[2][2]*m9a[1][0]*m9a[0][1];

var mhasil1i = mh1ai + mh1bi + mh1ci;
var mhasil2i = mh2ai + mh2bi + mh2ci;
var m31 = mhasil1i - mhasil2i;
console.log(" minor31 = " +m31);

var m10a = [[1,5,1],[10,3,2],[2,5,1]];

var mh1aj = m10a[0][0]*m10a[1][1]*m10a[2][2];
var mh1bj = m10a[0][1]*m10a[1][2]*m10a[2][0];
var mh1cj = m10a[0][2]*m10a[1][0]*m10a[2][1];

var mh2aj = m10a[2][0]*m10a[1][1]*m10a[0][2];
var mh2bj = m10a[2][1]*m10a[1][2]*m10a[0][0];
var mh2cj = m10a[2][2]*m10a[1][0]*m10a[0][1];

var mhasil1j = mh1aj + mh1bj + mh1cj;
var mhasil2j = mh2aj + mh2bj + mh2cj;
var m32 = mhasil1j - mhasil2j;
console.log(" minor32 = " +m32);

var m11a = [[1,3,1],[10,2,2],[2,2,1]];

var mh1ak = m11a[0][0]*m11a[1][1]*m11a[2][2];
var mh1bk = m11a[0][1]*m11a[1][2]*m11a[2][0];
var mh1ck = m11a[0][2]*m11a[1][0]*m11a[2][1];

var mh2ak = m11a[2][0]*m11a[1][1]*m11a[0][2];
var mh2bk = m11a[2][1]*m11a[1][2]*m11a[0][0];
var mh2ck = m11a[2][2]*m11a[1][0]*m11a[0][1];

var mhasil1k = mh1ak + mh1bk + mh1ck;
var mhasil2k = mh2ak + mh2bk + mh2ck;
var m33 = mhasil1k - mhasil2k;
console.log(" minor33 = " +m33);

var m12a = [[1,3,5],[10,2,3],[2,2,5]];

var mh1al = m12a[0][0]*m12a[1][1]*m12a[2][2];
var mh1bl = m12a[0][1]*m12a[1][2]*m12a[2][0];
var mh1cl = m12a[0][2]*m12a[1][0]*m12a[2][1];

var mh2al = m12a[2][0]*m12a[1][1]*m12a[0][2];
var mh2bl = m12a[2][1]*m12a[1][2]*m12a[0][0];
var mh2cl = m12a[2][2]*m12a[1][0]*m12a[0][1];

var mhasil1l = mh1al + mh1bl + mh1cl;
var mhasil2l = mh2al + mh2bl + mh2cl;
var m34 = mhasil1l - mhasil2l;
console.log(" minor34 = " +m34);

var m13a = [[3,5,1],[2,3,2],[7,5,2]];

var mh1am = m13a[0][0]*m13a[1][1]*m13a[2][2];
var mh1bm = m13a[0][1]*m13a[1][2]*m13a[2][0];
var mh1cm = m13a[0][2]*m13a[1][0]*m13a[2][1];

var mh2am = m13a[2][0]*m13a[1][1]*m13a[0][2];
var mh2bm = m13a[2][1]*m13a[1][2]*m13a[0][0];
var mh2cm = m13a[2][2]*m13a[1][0]*m13a[0][1];

var mhasil1m = mh1am + mh1bm + mh1cm;
var mhasil2m = mh2am + mh2bm + mh2cm;
var m41 = mhasil1m - mhasil2m;
console.log(" minor41 = " +m41);

var m14a = [[1,5,1],[10,3,2],[4,5,2]];

var mh1an = m14a[0][0]*m14a[1][1]*m14a[2][2];
var mh1bn = m14a[0][1]*m14a[1][2]*m14a[2][0];
var mh1cn = m14a[0][2]*m14a[1][0]*m14a[2][1];

var mh2an = m14a[2][0]*m14a[1][1]*m14a[0][2];
var mh2bn = m14a[2][1]*m14a[1][2]*m14a[0][0];
var mh2cn = m14a[2][2]*m14a[1][0]*m14a[0][1];

var mhasil1n = mh1an + mh1bn + mh1cn;
var mhasil2n = mh2an + mh2bn + mh2cn;
var m42 = mhasil1n - mhasil2n;
console.log(" minor42 = " +m42);

var m15a = [[1,3,1],[10,2,2],[4,7,2]];

var mh1ao = m15a[0][0]*m15a[1][1]*m15a[2][2];
var mh1bo = m15a[0][1]*m15a[1][2]*m15a[2][0];
var mh1co = m15a[0][2]*m15a[1][0]*m15a[2][1];

var mh2ao = m15a[2][0]*m15a[1][1]*m15a[0][2];
var mh2bo = m15a[2][1]*m15a[1][2]*m15a[0][0];
var mh2co = m15a[2][2]*m15a[1][0]*m15a[0][1];

var mhasil1o = mh1ao + mh1bo + mh1co;
var mhasil2o = mh2ao + mh2bo + mh2co;
var m43 = mhasil1o - mhasil2o;
console.log(" minor43 = " +m43);

var m16a = [[1,3,5],[10,2,3],[4,7,5]];

var mh1ap = m16a[0][0]*m16a[1][1]*m16a[2][2];
var mh1bp = m16a[0][1]*m16a[1][2]*m16a[2][0];
var mh1cp = m16a[0][2]*m16a[1][0]*m16a[2][1];

var mh2ap = m16a[2][0]*m16a[1][1]*m16a[0][2];
var mh2bp = m16a[2][1]*m16a[1][2]*m16a[0][0];
var mh2cp = m16a[2][2]*m16a[1][0]*m16a[0][1];

var mhasil1p = mh1ap + mh1bp + mh1cp;
var mhasil2p = mh2ap + mh2bp + mh2cp;
var m44 = mhasil1p - mhasil2p;
console.log(" minor44 = " +m44);

console.log("================================================================");

console.log("mencari KOFAKTOR matriks A : ");
var k11 = m11;
var k12 = (m12*-1);
var k13 = m13;
var k14 = (m14*-1);
var k21 = (m21*-1);
var k22 = m22;
var k23 = (m23*-1);
var k24 = m24;
var k31 = m31;
var k32 = (m32*-1);
var k33 = m33;
var k34 = (m34*-1);
var k41 = (m41*-1);
var k42 = m42;
var k43 = (m43*-1);
var k44 = m44;

console.log(" kofaktor11 = " +k11);
console.log(" kofaktor12 = " +k12);
console.log(" kofaktor13 = " +k13);
console.log(" kofaktor14 = " +k14);

console.log(" kofaktor21 = " +k21);
console.log(" kofaktor22 = " +k22);
console.log(" kofaktor23 = " +k23);
console.log(" kofaktor24 = " +k24);

console.log(" kofaktor31 = " +k31);
console.log(" kofaktor32 = " +k32);
console.log(" kofaktor33 = " +k33);
console.log(" kofaktor34 = " +k34);

console.log(" kofaktor41 = " +k41);
console.log(" kofaktor42 = " +k42);
console.log(" kofaktor43 = " +k43);
console.log(" kofaktor44 = " +k44);

console.log("================================================================");

console.log("mencari ADJOIN matriks A : ");
var ad11 = k11;
var ad12 = k21;
var ad13 = k31;
var ad14 = k41;

var ad21 = k12;
var ad22 = k22;
var ad23 = k32;
var ad24 = k42;

var ad31 = k13;
var ad32 = k23;
var ad33 = k33;
var ad34 = k43;

var ad41 = k14;
var ad42 = k24;
var ad43 = k34;
var ad44 = k44;

console.log(" adjoin11 = " +ad11);
console.log(" adjoin12 = " +ad12);
console.log(" adjoin13 = " +ad13);
console.log(" adjoin14 = " +ad14);

console.log(" adjoin21 = " +ad21);
console.log(" adjoin22 = " +ad22);
console.log(" adjoin23 = " +ad23);
console.log(" adjoin24 = " +ad24);

console.log(" adjoin31 = " +ad31);
console.log(" adjoin32 = " +ad32);
console.log(" adjoin33 = " +ad33);
console.log(" adjoin34 = " +ad34);

console.log(" adjoin41 = " +ad41);
console.log(" adjoin42 = " +ad42);
console.log(" adjoin43 = " +ad43);
console.log(" adjoin44 = " +ad44);

console.log("================================================================");

console.log("mencari INVERS matriks A : ");
var invers11 = ad11 / hasildet;
var invers12 = ad12 / hasildet;
var invers13 = ad13 / hasildet;
var invers14 = ad14 / hasildet;
var invers21 = ad21 / hasildet;
var invers22 = ad22 / hasildet;
var invers23 = ad23 / hasildet;
var invers24 = ad24 / hasildet;
var invers31 = ad31 / hasildet;
var invers32 = ad32 / hasildet;
var invers33 = ad33 / hasildet;
var invers34 = ad34 / hasildet;
var invers41 = ad41 / hasildet;
var invers42 = ad42 / hasildet;
var invers43 = ad43 / hasildet;
var invers44 = ad44 / hasildet;

console.log(" invers11 = " +invers11);
console.log(" invers12 = " +invers12);
console.log(" invers13 = " +invers13);
console.log(" invers14 = " +invers14);

console.log(" invers21 = " +invers21);
console.log(" invers22 = " +invers22);
console.log(" invers23 = " +invers23);
console.log(" invers24 = " +invers24);

console.log(" invers31 = " +invers31);
console.log(" invers32 = " +invers32);
console.log(" invers33 = " +invers33);
console.log(" invers34 = " +invers34);

console.log(" invers41 = " +invers41);
console.log(" invers42 = " +invers42);
console.log(" invers43 = " +invers43);
console.log(" invers44 = " +invers44);

console.log("================================================================");
console.log("A invers = Adjoing : Determinan");
console.log("         = " +invers11+ "      " +invers12+ "      " +invers13+ "      " +invers14) ;
console.log("           " +invers21+ "      " +invers22+ "      " +invers23+ "      " +invers24);
console.log("           " +invers31+ "      " +invers32+ "      " +invers33+ "      " +invers34);
console.log("           " +invers41+ "      " +invers42+ "    " +invers43+ "     " +invers44);
console.log("================================================================");
console.log("by : Micko_Tubagas - 20190801086");