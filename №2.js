function outputFromOddColumns(matrix) {
    let answer = [];
    let len = matrix[0].length;
    for (let j = 0; j < len; j+=2) {
        for (let i in matrix) {
            answer.push(matrix[i][j]);
        }
    }
    return answer;
}

function input() {
    let M = prompt("Введите количество строк");
    let matrix = [];
    for (let i = 0; i < M; i++) {
        matrix[i] = prompt("Введите элементы " + Number(i+1) + " строки через пробел")
        matrix[i] = matrix[i].split(" ");
    }
    return matrix;
}

function output(answer) {
    let output = "Исходная матрица:\n";
    for (let i in matrix) {
        output += matrix[i] + "\n";
    }
    output += "Ответ:\n";
    for (let i in answer) {
        output += answer[i] + ", ";
    }
    alert(output);
}

alert("Программа для вывода чисел из нечетных столбцов матрицы");
let matrix = input();
let answer = outputFromOddColumns(matrix);
output(answer);

