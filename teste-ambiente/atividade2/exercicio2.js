var matrizA = [[1,2],[3,4],[5,6]]
var matrizB = [[], []]

for(row=0; row < matrizA.length; row++){
    for(column = 0; column < matrizA[row].length; column++){
        matrizB [column][row] = matrizA [row][column];
    }
}
        
console.log(matrizB);