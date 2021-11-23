let number = 0;
const plusPlus = () => {
    let count = document.getElementById('count')

    number ++;
    count.textContent = number.toString();
}
plusPlus()

const plusMinus = () => {
    let count = document.getElementById('count')

    number --;
    count.textContent = number.toString();
}
plusMinus()

const plusReset = () => {
    let count = document.getElementById('count')

    number = 0;
    count.textContent = number.toString();
}
plusReset()
