/**
 * Created by Justin on 1/16/14.
 */

//var characterBackpack="emptyyy";
//var characterBackpackDisplay="Backpack: "+characterBackpack;

var strength=0;
var dexterity=1;
var intelligence=2;
var stamina=3;
var health=4;
var mana=5;
var armor=6;
var damage=7;
var experience=8;
var currency=9;

var stat=0;
var funModifier=1;
var minStat=2;

characterStats=[];

characterStats[strength]=[];
characterStats[dexterity]=[];
characterStats[intelligence]=[];
characterStats[stamina]=[];
characterStats[health]=[];
characterStats[mana]=[];
characterStats[armor]=[];
characterStats[damage]=[];
characterStats[experience]=[];
characterStats[currency]=[];

characterStats[strength][stat]=Math.floor((Math.random()*15)+3);
characterStats[strength][funModifier]="";
characterStats[dexterity][stat]=Math.floor((Math.random()*15)+3);
characterStats[dexterity][funModifier]="";
characterStats[intelligence][stat]=Math.floor((Math.random()*15)+3);
characterStats[intelligence][funModifier]="";
characterStats[stamina][stat]=Math.floor((Math.random()*15)+3);
characterStats[stamina][funModifier]="";
characterStats[health][stat]=Math.floor((Math.random()*15)+3);
characterStats[health][funModifier]=(characterStats[stamina][stat]*2)+characterStats[health][stat];
characterStats[health][minStat]=Math.floor((Math.random()*15)+3);
characterStats[mana][stat]=Math.floor((Math.random()*15)+3);
characterStats[mana][funModifier]=(characterStats[intelligence][stat]*2)+characterStats[mana][stat];
characterStats[mana][minStat]=Math.floor((Math.random()*15)+3);
characterStats[armor][stat]=Math.floor((Math.random()*15)+3);
characterStats[armor][funModifier]="";
characterStats[damage][stat]=Math.floor((Math.random()*15)+3);
characterStats[damage][funModifier]=characterStats[strength][stat]+characterStats[damage][stat];
characterStats[experience][stat]=Math.floor((Math.random()*15)+3);
characterStats[experience][funModifier]="";
characterStats[currency][stat]=Math.floor((Math.random()*15)+3);
characterStats[currency][funModifier]="";

var statDisplay=
"Strength:      \t"+characterStats[0][0]+"\tExperience:\t"+characterStats[8][0]+"\n"+
"Dexterity:     \t"+characterStats[1][0]+"\tGold:\t\t"+characterStats[9][0]+"\n"+
"Intelligence:  \t"+characterStats[2][0]+"\n"+
"Stamina:       \t"+characterStats[3][0]+"\n\n"+

"Armor:         \t"+characterStats[6][0]+"\tHealth:\t\t"+characterStats[4][2]+"/"+characterStats[4][1]+"\n"+
"Damage:        \t"+characterStats[7][1]+"\tMana:\t\t"+characterStats[5][2]+"/"+characterStats[5][1];



//3-18|str            exp:
//    |dex           gold:
//    |con
//    |char
//    |wis             hp: current/max
//    |int
//    |