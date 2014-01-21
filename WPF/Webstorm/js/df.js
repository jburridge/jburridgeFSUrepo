/**
* Created by Justin on 1/21/14.
*/
//
//
//
//
//var dungeon=[];
//
//dungeon[0]=[];
//dungeon[1]=[];
//dungeon[2]=[];
//dungeon[3]=[];
//dungeon[4]=[];
//dungeon[5]=[];
//dungeon[6]=[];
//dungeon[7]=[];
//dungeon[8]=[];
//dungeon[9]=[];
//
//var row=0;
//var column=0;
//var characterPosition="<XXXX>";
//
//grid="";
//for (xPosition=0; xPosition<10;xPosition++){
//    for (yPosition=0; yPosition<10;yPosition++){
//        dungeon[yPosition][xPosition]=Math.floor((Math.random()*3)+1);
//        if (row==xPosition && column==yPosition) {
//            grid=grid+characterPosition+"\t";
//        } else if (dungeon[yPosition][xPosition]== 1 ){
//            dungeon[yPosition][xPosition]="Floor"+ "\t";
//            grid+= dungeon[yPosition][xPosition];
//        } else if (dungeon[yPosition][xPosition]== 2){
//            dungeon[yPosition][xPosition]= "Pillar" + "\t";
//            grid+= dungeon[yPosition][xPosition];
//        } else if (dungeon[yPosition][xPosition]==3){
//            dungeon[yPosition][xPosition]="Gold"+"\t";
//            grid+= dungeon[yPosition][xPosition];
//        } else {
//            grid+= dungeon[yPosition][xPosition]+"\t";
//        }
//    }
//    grid=grid+"\n";
//}
//
//console.clear();
//console.log(grid);


var dungeon=[];

dungeon[0]=[];
dungeon[1]=[];
dungeon[2]=[];
dungeon[3]=[];
dungeon[4]=[];
dungeon[5]=[];
dungeon[6]=[];
dungeon[7]=[];
dungeon[8]=[];
dungeon[9]=[];

var row=0;
var column=0;
var characterPosition="<XXXX>";
var moveCondition = true;

while (moveCondition) {
    for (loopCounter=0; loopCounter<1; loopCounter++){
        grid="";
    for (xPosition=0; xPosition<10;xPosition++){
        for (yPosition=0; yPosition<10;yPosition++){
            if (loopCounter == 0){
                dungeon[yPosition][xPosition]=Math.floor((Math.random()*3)+1);
            }
            if (row==xPosition && column==yPosition) {
                grid=grid+characterPosition+"\t";
            } else if (dungeon[yPosition][xPosition]== 1 ){
                dungeon[yPosition][xPosition]="Floor"+ "\t";
                grid+= dungeon[yPosition][xPosition];
            } else if (dungeon[yPosition][xPosition]== 2){
                dungeon[yPosition][xPosition]= "Pillar" + "\t";
                grid+= dungeon[yPosition][xPosition];
            } else if (dungeon[yPosition][xPosition]==3){
                dungeon[yPosition][xPosition]="Gold"+"\t";
                grid+= dungeon[yPosition][xPosition];
            } else {
                grid+= dungeon[yPosition][xPosition]+"\t";
            }
        }
        grid=grid+"\n";
    }
    console.clear();
    console.log(grid);

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
    if (row>=dungeon.length) {
        row=0;
    } else if (row<0){
        row=dungeon.length-1;
    } else if (column>=dungeon.length) {
        column=0;
    } else if (column<0) {
        column=dungeon.length-1;
    }
}
}