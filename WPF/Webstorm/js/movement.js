/**
 * Created by Justin on 1/15/14.
 */

var column=0;
var row=0;
var moveCondition=true;
var characterPosition="<XXXX>";
var currentLayer=0;
var randomMonsterHealth=Math.floor((Math.random()*5)+5);
var randomMonsterDamage=Math.floor((Math.random()*5)+5);
var monsterMaker = makeMonster(world, monster, column, row);

while (moveCondition) {
    randomMonsterHealth=Math.floor((Math.random()*5)+5);
    randomMonsterDamage=Math.floor((Math.random()*5)+5);
    monsterMaker = makeMonster(world, monster, column, row);


    //console.clear();
    console.log(worldDisplay(multipleLevels[currentLayer], column, row, characterPosition));

    if (monsterMaker!="No battles found.") {
        var mobHealth="Health: "+randomMonsterHealth;
        var mobDamage="Damage: "+randomMonsterDamage;
    } else {
        mobHealth="\t";
        mobDamage="\t";
    }

    var statDisplay=
    "Strength:      \t"+characterStats[0][0]+   "\tExperience:   \t"+characterStats[8][0]+                              "\t |"+     "\t"+monsterMaker+"\n"+
    "Dexterity:     \t"+characterStats[1][0]+   "\tGold:         \t"+characterStats[9][0]+                              "\t |"+     "\t"+mobHealth+"\n"+
    "Intelligence:  \t"+characterStats[2][0]+                                                         "\t"+"\t"+"\t"+"\t"+" |"+     "\t"+mobDamage+"\n"+
    "Stamina:       \t"+characterStats[3][0]+                                                         "\t"+"\t"+"\t"+"\t"+" |"+
                                                                                          "\n"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t |"+"\n"+
    "Armor:         \t"+characterStats[6][0]+   "\tHealth:       \t"+characterStats[4][2]+"/"+characterStats[4][1]+     "\t |"+"\n"+
    "Damage:        \t"+characterStats[7][1]+   "\tMana:         \t"+characterStats[5][2]+"/"+characterStats[5][1]+     "\t |";
//    console.log(statDisplay);


    var moveDirection=prompt("Which direction would you like to move? \n Left, Right, Up, Down, Enter, Exit or End.").toLowerCase();
    if (moveDirection=="up") {
        row--;
    } else if (moveDirection=="down") {
        row++;
    } else if (moveDirection=="left") {
        column--;
    } else if (moveDirection=="right") {
        column++;
    } else if (multipleLevels[currentLayer][column][row]=="ladder" && moveDirection=="exit") {
        currentLayer--;
    } else if (multipleLevels[currentLayer][column][row]=="dungeon" && moveDirection=="enter") {
        currentLayer++;
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

if (moveDirection=="left" && ) {
    playerStats=combat(playerStats, multipleLevels[currentLayer+2][column][row]);
}