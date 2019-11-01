var waktua = [[8.12,4.7,6.6],[7.10,3.9,8.5]];

console.log("================================================================");
console.log("Route perjalan tebagi menjadi 2 yaitu : A & B ");
console.log("Route A memiliki 3 titik waktu berbeda dalam satu Routenya, Yaitu :");
console.log("   TITIK A1 = 8.12");
console.log("   TITIK A2 = 4.7");
console.log("   TITIK A3 = 6.6");
console.log("================================================================");
console.log("Route B memiliki 3 titik waktu berbeda juga dalam satu Routenya, Yaitu :");
console.log("   TITIK B1 = 7.10");
console.log("   TITIK B2 = 3.9");
console.log("   TITIK B3 = 8.5");
console.log("================================================================");

var waktu_a = waktua[0][0] + waktua[0][1] + waktua[0][2];
var waktu_b = waktua[1][0] + waktua[1][1] + waktua[1][2];

console.log("Perbandingan waktu tempuh antara kedua Route :");
console.log("Route A");
console.log("           TITIK 1 = 8.12");
console.log("           TITIK 2 = 4.7");
console.log("           TITIK 2 = 6.6");
console.log("           ``````````````````+ ");
console.log("           TOTAL WAKTU TEMPUH = " +waktu_a);
console.log("Route B");
console.log("           TITIK 1 = 7.10");
console.log("           TITIK 2 = 3.9");
console.log("           TITIK 2 = 8.5");
console.log("           ``````````````````+ ");
console.log("           TOTAL WAKTU TEMPUH = " +waktu_b);
console.log("================================================================");
if (waktu_a < waktu_b && waktu_b > waktu_a){
    console.log("Jadi Route dengan waktu tempuh tercepat adalah Route A yaitu : " +waktu_a);
    console.log("Jadi Route dengan waktu tempuh terpanjang/terlambat adalah Route B yaitu : " +waktu_b);
}
else {
    console.log("Jadi Route dengan waktu tempuh tercepat adalah Route B yaitu : " +waktu_b);
    console.log("Jadi Route dengan waktu tempuh terpanjang/terlambat adalah Route A yaitu : " +waktu_a);
}
console.log("================================================================");
console.log("by : Micko_Tubagas - 20190801086");