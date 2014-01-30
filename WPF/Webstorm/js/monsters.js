/**
 * Created by Justin on 1/17/14.
 */

var type=0;
var expValue=1;
var dropGold=2;
var monsterHealth=3;
var monsterDamage=4;

var troll=0;
var sandworm=1;
var frostGolem=2;
var moltenPup=3;
var nightLurker=4;
var mudMonster=5;


monster=[];
monster[troll]=[];
monster[sandworm]=[];
monster[frostGolem]=[];
monster[moltenPup]=[];
monster[nightLurker]=[];
monster[mudMonster]=[];

monster[troll][type]="Troll";
monster[troll][expValue]=5;
monster[troll][dropGold]=[2,6];
monster[troll][monsterHealth]=10;
monster[troll][monsterDamage]=1;

monster[sandworm][type]="Sandworm";
monster[sandworm][expValue]=10;
monster[sandworm][dropGold]=[4,12];
monster[sandworm][monsterHealth]=11;
monster[sandworm][monsterDamage]=2;

monster[frostGolem][type]="Frost Golem";
monster[frostGolem][expValue]=15;
monster[frostGolem][dropGold]=[8,18];
monster[frostGolem][monsterHealth]=12;
monster[frostGolem][monsterDamage]=3;

monster[moltenPup][type]="Molten Pup";
monster[moltenPup][expValue]=15;
monster[moltenPup][dropGold]=[8,18];
monster[moltenPup][monsterHealth]=13;
monster[moltenPup][monsterDamage]=4;

monster[nightLurker][type]="Night Lurker";
monster[nightLurker][expValue]=15;
monster[nightLurker][dropGold]=[8,18];
monster[nightLurker][monsterHealth]=14;
monster[nightLurker][monsterDamage]=5;

monster[mudMonster][type]="Mud Monster";
monster[mudMonster][expValue]=15;
monster[mudMonster][dropGold]=[8,18];
monster[mudMonster][monsterHealth]=15;
monster[mudMonster][monsterDamage]=6;

function makeMonster(world, monster, column, row){

    var spawnChance=Math.random();
    var normalSpawn=.5;
    var rareSpawn=.3;
    var eliteSpawn=.1;
    var returnValue="";

    if (world[column][row]=="forest" && spawnChance<normalSpawn) {
        monsterSelector=0;
    } else
    if (world[column][row]=="desert" && spawnChance<rareSpawn) {
        returnValue = "You have encountered a "+monster[1][0]+"!";
    } else
    if (world[column][row]=="water" && spawnChance<eliteSpawn){
        returnValue = "You have encountered a "+monster[2][0]+"!";
    }  else
    if (world[column][row]=="lava" && spawnChance<normalSpawn) {
        returnValue = "You have encountered a "+monster[3][0]+"!";
    } else
    if (world[column][row]=="caves" && spawnChance<rareSpawn) {
        returnValue = "You have encountered a "+monster[4][0]+"!";
    } else
    if (world[column][row]=="dirt" && spawnChance<eliteSpawn){
        returnValue = "You have encountered a "+monster[5][0]+"!";
    } else {
        returnValue = "No battles found.";
    }

    return returnValue;
}