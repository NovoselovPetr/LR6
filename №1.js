function sign(x) {
    if (x > 0) {
        return 1;
    }
    return 0;
}

console.log("Программа для вычисления значения sing(A) + sign(B) + sign(C)");
let A = -0.2;
let B = 6;
let C = 0;

let sing_A = sign(A);
let sing_B = sign(B);
let sing_C = sign(C);
let answer = sing_A + sing_B + sing_C;
console.log("При A = " + A + ", B = " + B + " и С = " + C + "\nЗначение sing(A) + sign(B) + sign(C) = " + answer);
