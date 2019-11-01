console.log("========================================================");
console.log("menghitung IRISAN & KARDINAL A B C ");
console.log("       A = 1,2,5,8,9,10");
console.log("       B = 4,2,8,10,11,12");
console.log("       C = 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
console.log("========================================================");

var a = [1,2,5,8,9,10];
var b = [4,2,8,10,11,12];
var c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var kumpulanarray = require("array-intersection");

var iris1 = kumpulanarray(a,b);
console.log(" hasil IRISAN A dengan B = " +iris1);
var iris2 = kumpulanarray(b,c);
console.log(" hasil IRISAN B dengan C = " +iris2);
var iris3 = kumpulanarray(c,a);
console.log(" hasil IRISAN C dengan A = " +iris3);
var kardinal = (a+c).length;
console.log(" hasil KARDINAL A + KARDINAL C = " +iris2);
console.log("================================================================");
console.log("by : Micko_Tubagas - 20190801086");