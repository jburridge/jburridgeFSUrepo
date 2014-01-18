/**
 * Created by Justin on 1/17/14.
 */


var type=0
var expValue=1
var dropGold=2

var troll=0
var sandworm=1
var frostGolem=2


monster=[];
monster[troll]=[];
monster[sandworm]=[];
monster[frostGolem]=[];

monster[troll][type]="Troll";
monster[troll][expValue]=5;
monster[troll][dropGold]=[2,6];

monster[sandworm][type]="Sandworm";
monster[sandworm][expValue]=10;
monster[sandworm][dropGold]=[4,12];

monster[frostGolem][type]="Frost Golem";
monster[frostGolem][expValue]=15;
monster[frostGolem][dropGold]=[8,18];


function makeMonster(world, monster, row, column){

    var spawnChance=Math.random();
    var normalSpawn=.5;
    var rareSpawn=.3;
    var eliteSpawn=.1;
    var returnValue="";

    if (world[column][row]=="forest" && spawnChance<normalSpawn) {
        returnValue = "You have encountered a "+monster[0][0]+"!";
    } else
    if (world[column][row]=="desert" && spawnChance<rareSpawn) {
        returnValue = "You have encountered a "+monster[1][0]+"!";
    } else
    if (world[column][row]=="water" && spawnChance<eliteSpawn){
        returnValue = "You have encountered a "+monster[2][0]+"!";
    } else {
        returnValue = "No battles found.";
    }

    return returnValue;
}

