const triangle = ["*"]
for (let  line= "*"; line.length < 8; line += "*") {
    console.log(line)
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz ${i}`);
    } else if (i % 3 === 0) {
        console.log(`Fizz ${i}`);
    } else if (i % 5 === 0) {
        console.log(`Buzz ${i}`);
    } else {
        console.log(i);
    }
}

// const chess = prompt ("Шахматная доска")
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 === 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}
console.log(board);