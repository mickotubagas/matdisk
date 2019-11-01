console.log("Pengurangan Matriks A - B");
console.log("================================");
console.log("A = 10 11 12 13");
console.log("    14 15 16 17");
console.log("    18 19 20 21");
console.log("    22 23 24 25");
console.log("B = 1 2 3 4");
console.log("    5 6 7 8");
console.log("    9 1 2 3");
console.log("    4 5 6 7");
console.log("================================");
var A = [[10,11,12,13],[14,15,16,17],[18,19,20,21],[22,23,24,25]];
var B = [[1,2,3,4],[5,6,7,8],[9,1,2,3],[4,5,6,7]];

var h11 = A[0][0]-B[0][0];
var h12 = A[0][1]-B[0][1];
var h13 = A[0][2]-B[0][2];
var h14 = A[0][3]-B[0][3];

var h21 = A[1][0]-B[1][0];
var h22 = A[1][1]-B[1][1];
var h23 = A[1][2]-B[1][2];
var h24 = A[1][3]-B[1][3];

var h31 = A[2][0]-B[2][0];
var h32 = A[2][1]-B[2][1];
var h33 = A[2][2]-B[2][2];
var h34 = A[2][3]-B[2][3];

var h41 = A[3][0]-B[3][0];
var h42 = A[3][1]-B[3][1];
var h43 = A[3][2]-B[3][2];
var h44 = A[3][3]-B[3][3];

console.log(" matriks a11 - b11 = " +h11);
console.log(" matriks a12 - b12 = " +h12);
console.log(" matriks a13 - b13 = " +h13);
console.log(" matriks a14 - b14 = " +h14);

console.log(" matriks a21 - b21 = " +h21);
console.log(" matrisk a22 - b22 = " +h22);
console.log(" matriks a23 - b23 = " +h23);
console.log(" matriks a24 - b24 = " +h24);

console.log(" matriks a31 - b31 = " +h31);
console.log(" matriks a32 - b32 = " +h32);
console.log(" matriks a33 - b33 = " +h33);
console.log(" matriks a34 - b34 = " +h34);

console.log(" matriks a41 - b41 = " +h41);
console.log(" matriks a42 - b42 = " +h42);
console.log(" matriks a43 - b43 = " +h43);
console.log(" matriks a44 - b44 = " +h44);

console.log("================================");
console.log("A-B = " +h11+ "  " +h12+ "  " +h13+ "  " +h14);
console.log("      " +h21+ "  " +h22+ "  " +h23+ "  " +h24);
console.log("      " +h31+ "  " +h32+ " " +h33+ " " +h34);
console.log("      " +h41+ " " +h42+ " " +h43+ " " +h44);
console.log("================================");
console.log("by : Micko_Tubagas - 20190801086");