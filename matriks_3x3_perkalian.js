console.log("Perkalian Matriks A x B");
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

var h11a = A[0][0]*B[0][0];
var h11b = A[0][1]*B[1][0];
var h11c = A[0][2]*B[2][0];

var h12a = A[0][0]*B[0][1];
var h12b = A[0][1]*B[1][1];
var h12c = A[0][2]*B[2][1];

var h13a = A[0][0]*B[0][2];
var h13b = A[0][1]*B[1][2];
var h13c = A[0][2]*B[2][2];

var hasil11 = h11a + h11b + h11c;
var hasil12 = h12a + h12b + h12c;
var hasil13 = h13a + h13b + h13c;

var h21a = A[1][0]*B[0][0];
var h21b = A[1][1]*B[1][0];
var h21c = A[1][2]*B[2][0];

var h22a = A[1][0]*B[0][1];
var h22b = A[1][1]*B[1][1];
var h22c = A[1][2]*B[2][1];

var h23a = A[1][0]*B[0][2];
var h23b = A[1][1]*B[1][2];
var h23c = A[1][2]*B[2][2];

var hasil21 = h21a + h21b + h21c;
var hasil22 = h22a + h22b + h22c;
var hasil23 = h23a + h23b + h23c;

var h31a = A[2][0]*B[0][0];
var h31b = A[2][1]*B[1][0];
var h31c = A[2][2]*B[2][0];

var h32a = A[2][0]*B[0][1];
var h32b = A[2][1]*B[1][1];
var h32c = A[2][2]*B[2][1];

var h33a = A[2][0]*B[0][2];
var h33b = A[2][1]*B[1][2];
var h33c = A[2][2]*B[2][2];

var hasil31 = h31a + h31b + h31c;
var hasil32 = h32a + h32b + h32c;
var hasil33 = h33a + h33b + h33c;

console.log("hasil (10 x 1)+(11 x 4)+(12 x 7) = " +hasil11);
console.log("hasil (10 x 2)+(11 x 5)+(12 x 8) = " +hasil12);
console.log("hasil (10 x 3)+(11 x 6)+(12 x 9) = " +hasil13);

console.log("hasil (13 x 1)+(14 x 4)+(15 x 7) = " +hasil21);
console.log("hasil (13 x 2)+(14 x 5)+(15 x 8) = " +hasil22);
console.log("hasil (13 x 3)+(14 x 6)+(15 x 9) = " +hasil23);

console.log("hasil (16 x 1)+(17 x 4)+(18 x 7) = " +hasil31);
console.log("hasil (16 x 2)+(17 x 5)+(18 x 8) = " +hasil32);
console.log("hasil (16 x 3)+(17 x 6)+(18 x 9) = " +hasil33);

console.log("================================");
console.log("AB = " +hasil11+ " " +hasil12+ " " +hasil13);
console.log("     " +hasil21+ " " +hasil22+ " " +hasil23);
console.log("     " +hasil31+ " " +hasil32+ " " +hasil33);
console.log("================================");
console.log("by : Micko_Tubagas - 20190801086");