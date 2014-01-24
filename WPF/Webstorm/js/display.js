/**
 * Created by Justin on 1/22/14.
 */

function worldDisplay (world, column, row, characterPosition) {
    grid="";
    for (xPosition=0; xPosition<world.length;xPosition++){
        for (yPosition=0; yPosition<world[xPosition].length;yPosition++){
            if (row==xPosition && column==yPosition) {
                grid=grid+characterPosition+"\t";
            } else {
                grid=grid+world[yPosition][xPosition]+"\t";
            }
        }
        grid=grid+"\n";
    }
    return grid;
}