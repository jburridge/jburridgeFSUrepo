/**
 * Created by Justin on 2/4/14.
 */

//function triangle (b,h) {
//    var a= (.5*b)*h;
//    return a;
//}
//
//console.log(triangle(6,10));

var someNumbers=[20,30,40,50,60];

function getAverage (theNums) {
    var total=0;
    for (var i=0;i<theNums.length;i++) {
        total+=theNums[i];
    }
    return total/theNums.length;
}
console.log(getAverage(someNumbers));