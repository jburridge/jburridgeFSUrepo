/**
 * Created by Justin on 1/15/14.
 */

var grid="";
var column=0;
var row=0;
var moveCondition=true;
var characterPosition="<XXXX>";




//create a loop for moving the player
while (moveCondition) {
    grid="";
    for (xPosition=0; xPosition<world.length;xPosition++){
        for (yPosition=0; yPosition<world[xPosition].length;yPosition++){
            if (row==xPosition && column==yPosition) {
                grid=grid+characterPosition+"\t";
            } else{
                grid=grid+world[yPosition][xPosition]+"\t";
            }
        }
        grid=grid+"\n";
    }
    console.clear();
    console.log(grid);
    console.log(characterBackpack);
//assigning the move directions
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
//making the world spherical
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

//random loot function
var randomLoot=loot[Math.floor(Math.random()*loot.length)];
var randomRareLoot=rareLoot[Math.floor(Math.random()*rareLoot.length)];
var randomInteger=Math.random()+11;
var randomInteger2=Math.random()+11;

function eventMove () {
    if (randomInteger==randomInteger2) {
        characterBackpack=characterBackpack+randomRareLoot;
    }
    else if (randomInteger==1||5||9) {
        characterBackpack=characterBackpack+randomLoot;
    }
}

