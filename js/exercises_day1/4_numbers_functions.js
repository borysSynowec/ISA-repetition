/*====================================================
NUMBERS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
=====================================================
Wskazówki do zadań:
- Number.parseFloat(val) - konwersja stringa na liczbę
- val.toFixed() - dokładność liczb po przecinku
- val.toString() - konwersja number do string */

// TODO: 1. Napisz funkcję, która pobiera liczbę i zwraca ją skonwertowaną na string
// ver1
const convertToString = (Number) => {
    return Number.toString();
}
console.log(convertToString(20));

// ver2
const convertToString2 = (Number) => {
    let string = Number.toString();
    return string;
}
console.log(convertToString2(20));

// ver3
const convertToString3 = (Number) => {
    return Number.toString();
}

// ver4
// const convertToString4 =()=>{

//     const numberToStringChild =(Number)=>{
//     return Number.toString();
// }
// let brandNewString = numberToStringChild();
// }
// convertToString4();



// TODO: 2. Napisz funkcję, która pobiera stringa i zwraca go skonwertowanego na number

const StringToNumber = (str) => {
    return parseFloat(str);
}


/* TODO: 3. W poniższych zmiennych, doprecyzuj rozwinięcie dziesiętne. Nadpisz wartość zmiennych nową wartością.
    - var powerHorses = 233; do 3 liczb po przecinku
    - var score = 10.33344; do 2 liczb po przecinku */

    const numberFixed = () =>{
        let powerHorses = 233
        return powerHorses.toFixed(3);
    }
    console.log(numberFixed());

    const numberFixed2 = ( ) =>{
        let score = 10.33344
        return score.toFixed(2);
    }
    console.log(numberFixed2());

    // bez zadeklarowanego 

const numberFixedUndeclared = (num) =>{
    return num.toFixed(2);
};