/**
 * Created by Justin on 1/27/14.
 */

//monster
//monster type
//monster characterStats
//monsters hitpoints
//
//constitution
//dexterity
//strength
//
//3,    45,    67,    89,   1011, 1213, 1415, 1617, 18
//-,4,  -3,    -2,    -1,     0,   1,    2,     3,   4
//
////
//
//start of combat
//initiatve roll
//1-20+dex modifier - higher goes first
//does your char go first
//yes                                             no
//player combat                                   monster combat
//                                                calc dmg
//punch sequence                                  assess player hp
//(d20+str-dexopponent)>armor                     player hp <=0
//(mond20+monstr-dexmine)>myarmor                 death or other player turn
//
//enemyhealth-(d6+str)
//if hp<0 then experience
//
//function facepunch (str, dex, armorclass)
//if (math.floor(math.randomX20)+str-dex>armorclass) {
//    return 1 else
//    return 0
//}
//
//
//if miss then dmg=0
//
//if death then death screen else experience
//experience += monster[0][2]
//cross exp bucket then level else nothing
//if level then add level to modifiers

//funciton (characterStats, monster) {
//    var hp1 = player[hp];
//
//    var hp2 = monster[hp];
//    order=1 or 2
//
//
//
//    while players both active
//    if(order){
//        player hits monster
//        monsters hits player
//    } else {
//        monster hits player
//        player hits monster
//    }
//}

if ((Math.floor(Math.random()*20)+dexModifier)>Math.floor(Math.random()*20)+monsterDexModifier) {
    var turnOrder="player";
} else {
    var turnOrder="monster";
}

function theFight (characterStats, monster) {
}







//add two arrays containing which player and monster ifnromaiton
function combat(player, monster) {
//function

//initial roll





//to hti rool for player
//damage player
//to hit roll monster
//damage monster
//evaluate the combat

}