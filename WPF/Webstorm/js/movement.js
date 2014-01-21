/**
 * Created by Justin on 1/15/14.
 */

var grid="";
var column=0;
var row=0;
var moveCondition=true;
var characterPosition="<XXXX>";


//create a loop for moving the player and creating the grid
while (moveCondition) {
    var randomMonsterHealth=Math.floor((Math.random()*5)+5);
    var randomMonsterDamage=Math.floor((Math.random()*5)+5);
    var monsterMaker = makeMonster(world, monster, row, column);
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

    if (monsterMaker!="No battles found.") {
        var mobHealth="Health: "+randomMonsterHealth;
        var mobDamage="Damage: "+randomMonsterDamage;
    } else {
        mobHealth="\t";
        mobDamage="\t";
    }

//start stat display
        var statDisplay=

        "Strength:      \t"+characterStats[0][0]+"\tExperience:\t"+characterStats[8][0]+"\t |"+
            "\t"+ monsterMaker +"\n"+
            "Dexterity:     \t"+characterStats[1][0]+"\tGold:\t\t"+characterStats[9][0]+"\t |"+
            "\t"+mobHealth+"\n"+
            "Intelligence:  \t"+characterStats[2][0]+"\t"+"\t"+"\t"+"\t"+" |"+
            "\t"+mobDamage+"\n"+
            "Stamina:       \t"+characterStats[3][0]+"\t"+"\t"+"\t"+"\t"+" |"+"\n"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t |"+"\n"+

            "Armor:         \t"+characterStats[6][0]+"\tHealth:\t\t"+characterStats[4][2]+"/"+characterStats[4][1]+"\t |"+"\n"+
            "Damage:        \t"+characterStats[7][1]+"\tMana:\t\t"+characterStats[5][2]+"/"+characterStats[5][1]+"\t |";

    console.log(statDisplay);
//end stat display



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


