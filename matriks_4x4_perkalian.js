console.log("Perkalian Matriks A x B");
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

var h11a = A[0][0]*B[0][0];
var h11b = A[0][1]*B[1][0];
var h11c = A[0][2]*B[2][0];
var h11d = A[0][3]*B[3][0];

var h12a = A[0][0]*B[0][1];
var h12b = A[0][1]*B[1][1];
var h12c = A[0][2]*B[2][1];
var h12d = A[0][3]*B[3][1];

var h13a = A[0][0]*B[0][2];
var h13b = A[0][1]*B[1][2];
var h13c = A[0][2]*B[2][2];
var h13d = A[0][3]*B[3][2];

var h14a = A[0][0]*B[0][3];
var h14b = A[0][1]*B[1][3];
var h14c = A[0][2]*B[2][3];
var h14d = A[0][3]*B[3][3];

var hasil11 = h11a + h11b + h11c + h11d;
var hasil12 = h12a + h12b + h12c + h12d;
var hasil13 = h13a + h13b + h13c + h13d;
var hasil14 = h14a + h14b + h14c + h14d;

var h21a = A[1][0]*B[0][0];
var h21b = A[1][1]*B[1][0];
var h21c = A[1][2]*B[2][0];
var h21d = A[1][3]*B[3][0];

var h22a = A[1][0]*B[0][1];
var h22b = A[1][1]*B[1][1];
var h22c = A[1][2]*B[2][1];
var h22d = A[1][3]*B[3][1];

var h23a = A[1][0]*B[0][2];
var h23b = A[1][1]*B[1][2];
var h23c = A[1][2]*B[2][2];
var h23d = A[1][3]*B[3][2];

var h24a = A[1][0]*B[0][3];
var h24b = A[1][1]*B[1][3];
var h24c = A[1][2]*B[2][3];
var h24d = A[1][3]*B[3][3];

var hasil21 = h21a + h21b + h21c + h21d;
var hasil22 = h22a + h22b + h22c + h22d;
var hasil23 = h23a + h23b + h23c + h23d;
var hasil24 = h24a + h24b + h24c + h24d;

var h31a = A[2][0]*B[0][0];
var h31b = A[2][1]*B[1][0];
var h31c = A[2][2]*B[2][0];
var h31d = A[2][3]*B[3][0];

var h32a = A[2][0]*B[0][1];
var h32b = A[2][1]*B[1][1];
var h32c = A[2][2]*B[2][1];
var h32d = A[2][3]*B[3][1];

var h33a = A[2][0]*B[0][2];
var h33b = A[2][1]*B[1][2];
var h33c = A[2][2]*B[2][2];
var h33d = A[2][3]*B[3][2];

var h34a = A[2][0]*B[0][3];
var h34b = A[2][1]*B[1][3];
var h34c = A[2][2]*B[2][3];
var h34d = A[2][3]*B[3][3];

var hasil31 = h31a + h31b + h31c + h31d;
var hasil32 = h32a + h32b + h32c + h32d;
var hasil33 = h33a + h33b + h33c + h33d;
var hasil34 = h34a + h34b + h34c + h34d;

var h41a = A[3][0]*B[0][0];
var h41b = A[3][1]*B[1][0];
var h41c = A[3][2]*B[2][0];
var h41d = A[3][3]*B[3][0];

var h42a = A[3][0]*B[0][1];
var h42b = A[3][1]*B[1][1];
var h42c = A[3][2]*B[2][1];
var h42d = A[3][3]*B[3][1];

var h43a = A[3][0]*B[0][2];
var h43b = A[3][1]*B[1][2];
var h43c = A[3][2]*B[2][2];
var h43d = A[3][3]*B[3][2];

var h44a = A[3][0]*B[0][3];
var h44b = A[3][1]*B[1][3];
var h44c = A[3][2]*B[2][3];
var h44d = A[3][3]*B[3][3];

var hasil41 = h41a + h41b + h41c + h41d;
var hasil42 = h42a + h42b + h42c + h42d;
var hasil43 = h43a + h43b + h43c + h43d;
var hasil44 = h44a + h44b + h44c + h44d;

console.log("hasil (10 x 1)+(11 x 5)+(12 x 9)(13 x 4) = " +hasil11);
console.log("hasil (10 x 2)+(11 x 6)+(12 x 1)(13 x 5) = " +hasil12);
console.log("hasil (10 x 3)+(11 x 7)+(12 x 2)(13 x 6) = " +hasil13);
console.log("hasil (10 x 4)+(11 x 8)+(12 x 3)(13 x 7) = " +hasil14);

console.log("hasil (14 x 1)+(15 x 5)+(16 x 9)(17 x 4) = " +hasil21);
console.log("hasil (14 x 2)+(15 x 6)+(16 x 1)(17 x 5) = " +hasil22);
console.log("hasil (14 x 3)+(15 x 7)+(16 x 2)(17 x 6) = " +hasil23);
console.log("hasil (14 x 4)+(15 x 8)+(16 x 3)(17 x 7) = " +hasil24);

console.log("hasil (18 x 1)+(19 x 5)+(20 x 9)(21 x 4) = " +hasil31);
console.log("hasil (18 x 2)+(19 x 6)+(20 x 1)(21 x 5) = " +hasil32);
console.log("hasil (18 x 3)+(19 x 7)+(20 x 2)(21 x 6) = " +hasil33);
console.log("hasil (18 x 4)+(19 x 8)+(20 x 3)(21 x 7) = " +hasil34);

console.log("hasil (22 x 1)+(23 x 5)+(24 x 9)(25 x 4) = " +hasil41);
console.log("hasil (22 x 2)+(23 x 6)+(24 x 1)(25 x 5) = " +hasil42);
console.log("hasil (22 x 3)+(23 x 7)+(24 x 2)(25 x 6) = " +hasil43);
console.log("hasil (22 x 4)+(23 x 8)+(24 x 3)(25 x 7) = " +hasil44);

console.log("================================");
console.log("AB = " +hasil11+ " " +hasil12+ " " +hasil13+ " " +hasil14);
console.log("     " +hasil21+ " " +hasil22+ " " +hasil23+ " " +hasil24);
console.log("     " +hasil31+ " " +hasil32+ " " +hasil33+ " " +hasil34);
console.log("     " +hasil41+ " " +hasil42+ " " +hasil43+ " " +hasil44);
console.log("================================");
console.log("by : Micko_Tubagas - 20190801086");

