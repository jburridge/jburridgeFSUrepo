/**
 * Created by Justin on 1/16/14.
 */

//var strength=0;
//var dexterity=1;
//var intelligence=2;
//var stamina=3;
//var health=4;
//var mana=5;
//var armor=6;
//var damage=7;
//var experience=8;
//var currency=9;
//
//var stat=0;
//var funModifier=1;
//var minStat=2;
//
//characterStats=[];
//
//characterStats[strength]=[];
//characterStats[dexterity]=[];
//characterStats[intelligence]=[];
//characterStats[stamina]=[];
//characterStats[health]=[];
//characterStats[mana]=[];
//characterStats[armor]=[];
//characterStats[damage]=[];
//characterStats[experience]=[];
//characterStats[currency]=[];
//
//characterStats[strength][stat]=Math.floor((Math.random()*15)+3);
//characterStats[strength][funModifier]="";
//characterStats[dexterity][stat]=Math.floor((Math.random()*15)+3);
//characterStats[dexterity][funModifier]="";
//characterStats[intelligence][stat]=Math.floor((Math.random()*15)+3);
//characterStats[intelligence][funModifier]="";
//characterStats[stamina][stat]=Math.floor((Math.random()*15)+3);
//characterStats[stamina][funModifier]="";
//characterStats[health][stat]=Math.floor((Math.random()*15)+3);
//characterStats[health][funModifier]=(characterStats[stamina][stat]*2)+characterStats[health][stat];
//characterStats[health][minStat]=Math.floor((Math.random()*15)+3);
//characterStats[mana][stat]=Math.floor((Math.random()*15)+3);
//characterStats[mana][funModifier]=(characterStats[intelligence][stat]*2)+characterStats[mana][stat];
//characterStats[mana][minStat]=Math.floor((Math.random()*15)+3);
//characterStats[armor][stat]=Math.floor((Math.random()*15)+3);
//characterStats[armor][funModifier]="";
//characterStats[damage][stat]=Math.floor((Math.random()*15)+3);
//characterStats[damage][funModifier]=characterStats[strength][stat]+characterStats[damage][stat];
//characterStats[experience][stat]=Math.floor((Math.random()*15)+3);
//characterStats[experience][funModifier]="";
//characterStats[currency][stat]=Math.floor((Math.random()*15)+3);
//characterStats[currency][funModifier]="";



//3-18|str            exp:
//    |dex           gold:
//    |con
//    |char
//    |wis             hp: current/max
//    |int
//    |

//stats 3d6
//hp 10-20 +conmod
//ac 10+dexmod
//dmg d6

function statMod(statValue) {
    if (statValue==18) {
        return 4
    } else if (statValue==17 || 16) {
        return 3
    } else if (statValue==15 || 14) {
        return 2
    } else if (statValue==13 || 12) {
        return 1
    } else if (statValue==11 || 10) {
        return 0
    } else if (statValue==9 || 8) {
        return -1
    } else if (statValue==7 || 6) {
        return -2
    } else if (statValue==5 || 4) {
        return -3
    } else if (statValue==3) {
        return -4
}
}

function combat (playerStats, monsterStats) {
var str=0;
var con=1;
var dex=2;
var int=3;
var wis=4;
var cha=5;
var strMod=6;
var conMod=7;
var dexMod=8;
var hp=9;
var ac=10;
var gold=11;
var exp=12;
var dmg=13;
var dmgLow=0;
var dmgHigh=1;
//str, dex, con, int, wis, cha, ac, hp, strmod, dexmod, conmod, dmg
var playerStats = [];
playerStats[str]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
playerStats[con]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
playerStats[dex]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
playerStats[int]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
playerStats[wis]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
playerStats[cha]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
playerStats[strMod]=statMod(playerStats[0]);
playerStats[conMod]=statMod(playerStats[1]);
playerStats[dexMod]=statMod(playerStats[2]);
playerStats[hp]+=playerStats[conMod];
playerStats[ac]=10;
playerStats[gold]=0;
playerStats[exp]=0;
playerStats[dmg]=[1,6];
playerStats[dmg][dmgLow]+=strMod;
playerStats[dmg][dmgHigh]+=strMod;

var strmon=0;
var conmon=1;
var dexmon=2;
var strModmon=6;
var conModmon=7;
var dexModmon=8;
var hpmon=9;
var acmon=10;
var goldmon=11;
var expmon=12;
var dmgmon=13;

var monsterStats = [];
monsterStats[str]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
monsterStats[con]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
monsterStats[dex]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
monsterStats[int]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
monsterStats[wis]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
monsterStats[cha]=Math.floor(5*Math.random())+Math.floor(5*Math.random())+Math.floor(5*Math.random())+3;
monsterStats[strMod]=statMod(playerStats[0]);
monsterStats[conMod]=statMod(playerStats[1]);
monsterStats[dexMod]=statMod(playerStats[2]);
monsterStats[hp]+=playerStats[conMod];
monsterStats[ac]=10;
monsterStats[gold]=0;
monsterStats[exp]=0;
monsterStats[dmg]=[1,6];
monsterStats[dmg][dmgLow]+=strMod;
monsterStats[dmg][dmgHigh]+=strMod;

while (playerStats[hp]>0 && monsterStats[hpmon]>0){
//player hits monster
if (Math.floor(Math.random()*19+1)+playerStats[dexMod]>=Math.floor(Math.random()*19+1)+monsterStats[dexModmon]) {
    if (Math.floor(Math.random()*19+1)+playerStats[strMod]>=monsterStats[ac]+monsterStats[dexModmon]) {
        monsterStats[hpmon]-=Math.floor((playerStats[dmg][dmgHigh][dmgLow])*Math.random())+playerStats[dmg][dmgLow];
    }

//monster hits player
    if (monsterStats[hpmon]>0){
        if (Math.floor(Math.random()*19+1)+monsterStats[strModmon]>=playerStats[ac]+playerStats[dexMod]) {
        playerStats[hp]-=Math.floor((monsterStats[dmgmon][dmgHigh][dmgLow])*Math.random())+monsterStats[dmgmon][dmgLow];
        }
    }
} else {
    playerStats[exp]+=monsterStats[expmon];
    playerStats[gold]+=monsterStats[goldmon];
}



    if (playerStats[hp]<=0) {
        return playerStats;
    }
}
}

