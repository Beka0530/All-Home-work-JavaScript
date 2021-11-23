const Numbers = (number1, number2) => {
    number1 = [1, 2, 3, 4]
    number2 = [1, 2, 3, 4, 5]
    if (number1.length < number2.length) {
        console.log("Первый намбер меньше!")
    }else {
        console.log("Второй намбер меньше!")
    }
}
Numbers()

const twoMass = (array, array2) => {
    array = ["one", "two", "three", "four", "five"]
    array2 = ["one", "two", "three", "four"]
    if (array.length > array2.length) {
        console.log('Первый массив больше!')
    }else {
        console.log('Втрой массив больше!')
    }
}

twoMass()


const countChar = () => {
    let x = 'GitHub';
    let empty = '';

    console.log('Длина слова GitHub ' + x.length + ' кодовых значений');
}

countChar()