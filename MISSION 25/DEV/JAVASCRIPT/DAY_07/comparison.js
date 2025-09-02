console.log("02">1)
//"02" is converted to a number (2), so 2 > 1 → true.


console.log(null>0)
//null becomes 0 when compared using >.
//0 > 0 → false.

console.log(null < 0);
//Again, null → 0.
//0 < 0 → false.


console.log(null == 0);
//== does not convert null to 0 in this case.
//null is only loosely equal to undefined, not 0.


console.log(null >= 0);
//null → 0, so 0 >= 0 → true.
console.log("End")
