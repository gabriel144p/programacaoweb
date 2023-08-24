var matrizA = [[1,2], 
               [3,4]]

var matrizB = [[5,6], 
               [7,8],
                [1,2]]

var resultadox = 0

var colunaA = 0
var colunaB = 0

for(row=0; row < matrizA.length; row++){
    
    for(column = 0; column < matrizA[row].length; column++){
        if (matrizA[row].length == matrizB.length){
            resultadox = resultadox + matrizA [row][column] * matrizB[column][row]
        } else {
            console.log("erro");
            break;
        }
    }

}

console.log(resultadox)