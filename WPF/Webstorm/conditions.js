/**
 * Created by Justin on 1/10/14.
 */

var world=[];


world[0]=[];
world[1]=[];
world[2]=[];
world[3]=[];
world[4]=[];
world[5]=[];
world[6]=[];
world[7]=[];
world[8]=[];
world[9]=[];

world[0][0]="water";
world[0][1]="water";
world[0][2]="water";
world[0][3]="water";
world[0][4]="water";
world[0][5]="forest";
world[0][6]="forest";
world[0][7]="forest";
world[0][8]="forest";
world[0][9]="forest";

world[1][0]="water";
world[1][1]="water";
world[1][2]="water";
world[1][3]="water";
world[1][4]="forest";
world[1][5]="forest";
world[1][6]="forest";
world[1][7]="forest";
world[1][8]="forest";
world[1][9]="forest";

world[2][0]="water";
world[2][1]="water";
world[2][2]="water";
world[2][3]="forest";
world[2][4]="forest";
world[2][5]="forest";
world[2][6]="forest";
world[2][7]="forest";
world[2][8]="forest";
world[2][9]="forest";

world[3][0]="water";
world[3][1]="forest";
world[3][2]="forest";
world[3][3]="forest";
world[3][4]="forest";
world[3][5]="forest";
world[3][6]="forest";
world[3][7]="forest";
world[3][8]="forest";
world[3][9]="forest";

world[4][0]="forest";
world[4][1]="forest";
world[4][2]="forest";
world[4][3]="forest";
world[4][4]="forest";
world[4][5]="forest";
world[4][6]="forest";
world[4][7]="forest";
world[4][8]="forest";
world[4][9]="forest";

world[5][0]="forest";
world[5][1]="forest";
world[5][2]="forest";
world[5][3]="forest";
world[5][4]="forest";
world[5][5]="forest";
world[5][6]="forest";
world[5][7]="forest";
world[5][8]="forest";
world[5][9]="forest";

world[6][0]="forest";
world[6][1]="forest";
world[6][2]="water";
world[6][3]="water";
world[6][4]="forest";
world[6][5]="forest";
world[6][6]="forest";
world[6][7]="forest";
world[6][8]="desert";
world[6][9]="desert";

world[7][0]="forest";
world[7][1]="forest";
world[7][2]="water";
world[7][3]="water";
world[7][4]="forest";
world[7][5]="forest";
world[7][6]="forest";
world[7][7]="desert";
world[7][8]="desert";
world[7][9]="desert";

world[8][0]="forest";
world[8][1]="forest";
world[8][2]="desert";
world[8][3]="desert";
world[8][4]="desert";
world[8][5]="desert";
world[8][6]="desert";
world[8][7]="desert";
world[8][8]="desert";
world[8][9]="desert";

world[9][0]="desert";
world[9][1]="desert";
world[9][2]="desert";
world[9][3]="desert";
world[9][4]="desert";
world[9][5]="desert";
world[9][6]="desert";
world[9][7]="desert";
world[9][8]="desert";
world[9][9]="desert";

if(world[0][0]=="water"){
    console.log("WATER");
} else if(world[0][0]=="forest"){
    console.log("FOREST");
} else {
    console.log("DESERT");
}

//var y=200;
//var x=100;
//var z=300;
//if (x==y){
//    console.log("X is equal to Y.. In another world.");
//}
//else {
//    console.log("Yeah that isn't happening.");
//}
//
//if (z>x){
//    console.log("Z is greater than X!");
//}
//else {
//    console.log("Z is not greater than X!");
//}