/**
 * Created by Justin on 1/15/14.
 */

var grid="";
var column=1;
var row=1;
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

    var moveDirection=prompt("Which direction would you like to move? \n Left, Right, Up, Down, or End.".toLowerCase());
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
    }

//console.log(world[column][row]); // Allows us to check where the new position of the prompt is
}


//set the grid loop

