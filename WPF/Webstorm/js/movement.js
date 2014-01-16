/**
 * Created by Justin on 1/15/14.
 */

var grid="";
var column=0;
var row=0;
var moveCondition=true;
var character="<XXXX>";





//create a loop for moving the moveDirection
while (moveCondition) {
    grid="";
    for (xPosition=0; xPosition<world.length;xPosition++){
        for (yPosition=0; yPosition<world[xPosition].length;yPosition++){
            if (row==xPosition && column==yPosition) {
                grid=grid+character+"\t";
            } else{
                grid=grid+world[yPosition][xPosition]+"\t";
            }
        }
        grid=grid+"\n";
    }
    console.clear();
    console.log(grid);

    var moveDirection=prompt("Which direction would you like to move? \n Left, Right, Up, Down, or End.").toLowerCase();
    if (moveDirection=="up") {
        row--;
    } else if (moveDirection=="down") {
        row++;
    } else if (moveDirection=="left") {
        column--;
    } else if (moveDirection=="right") {
        column++;
    } else if (moveDirection=="end") {
        moveCondition=false;
    } else if (moveDirection==null) {
        moveCondition=false;
    }

    if (row>=world.length) {
        row=0;
    } else if (row<0){
        row=world.length-1;
    } else if (column>=world.length) {
        column=0;
    } else if (column<0) {
        column=world.length-1;
    }

}


