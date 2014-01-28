/**
 * Created by Justin on 1/28/14.
 */

var game=true;
x=0;
while (game==true) {
    var odds=Math.round(Math.random()*256000000);

    if(odds<2){
        game=false;
    }
    x++

}
console.log(x);
console.log("End!")