console.log("Penjumlahan Matriks A + B");
console.log("================================");
console.log("A = 10 11 12");
console.log("    13 14 15");
console.log("    16 17 18");
console.log("B = 1 2 3");
console.log("    4 5 6");
console.log("    7 8 9");
console.log("================================");
var A = [[10,11,12],[13,14,15],[16,17,18]];
var B = [[1,2,3],[4,5,6],[7,8,9]];

var h11 = A[0][0]+B[0][0];
var h12 = A[0][1]+B[0][1];
var h13 = A[0][2]+B[0][2];

var h21 = A[1][0]+B[1][0];
var h22 = A[1][1]+B[1][1];
var h23 = A[1][2]+B[1][2];

var h31 = A[2][0]+B[2][0];
var h32 = A[2][1]+B[2][1];
var h33 = A[2][2]+B[2][2];

console.log(" matriks a11 + b11 = " +h11);
console.log(" matriks a12 + b12 = " +h12);
console.log(" matriks a13 + b13 = " +h13);

console.log(" matriks a21 + b21 = " +h21);
console.log(" matrisk a22 + b22 = " +h22);
console.log(" matriks a23 + b23 = " +h23);

console.log(" matriks a31 + b31 = " +h31);
console.log(" matriks a32 + b32 = " +h32);
console.log(" matriks a33 + b33 = " +h33);

console.log("================================");
console.log("A+B = " +h11+ " " +h12+ " " +h13);
console.log("      " +h21+ " " +h22+ " " +h23);
console.log("      " +h31+ " " +h32+ " " +h33);
console.log("================================");
console.log("by : Micko_Tubagas - 20190801086");