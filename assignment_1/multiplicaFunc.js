var hw = document.getElementById('hw');
hw.addEventListener('click', function() {
    alert('Calculation complete');
})

var matrix_1 = [
    [12, 32, 49, 51],
    [3, 46, 23, 67],
    [45, 34, 9, 5],
    [90, 6, 54, 51],
];

// var matrix_3 = [
//     [1, 0, 1, 2],
//     [3, 1, 0, 2],
//     [2, 0, 4, 0],
//     [1, 3, 1, 1],
// ];

var matrix_2 = [
    [3, 2, 4, 5],
    [9, 4, 2, 6],
    [9, 1, 5, 9],
    [3, 5, 2, 3],
];
var resultMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

function matrixMulCalculate() {

    //document.getElementById("result").innerHTML = "Hello!";


    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            for (var k = 0; k < 4; k++)
                resultMatrix[i][j] += matrix_1[i][k] * matrix_2[k][j];
        }
    }

    for (var a = 0; a < resultMatrix.length; a++) {
        for (var b = 0; b < resultMatrix[a].length; b++) {
            document.getElementById("r_" + a + b).innerHTML = resultMatrix[a][b];
        }
    }
}


function loadMatrix() {
    for (var a = 0; a < matrix_1.length; a++) {
        for (var b = 0; b < matrix_1[a].length; b++) {
            document.getElementById("m1_" + a + b).innerHTML = matrix_1[a][b];
            document.getElementById("m2_" + a + b).innerHTML = matrix_2[a][b];
        }
    }
    //document.getElementById("m1_00").innerHTML = matrix_1[0][0];
    //document.getElementById("Matrix_2").innerHTML = matrix_2;
}