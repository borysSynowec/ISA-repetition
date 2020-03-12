/*
=====================================================
MATH: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math
=====================================================

Wskazówki do zadań:
- Math.random() - zwraca losową wartość w zakresie od 0 do 1
- Math.round(a) - zaokrągła wartość w górę lub w dół
- Math.max(a, b, c...) - zwraca największą wartość spośród przekazanych wartosci
- Math.pow(a, b) - podnosi wartość a do potegi b
*/
/* TODO: 1. Napisz funkcję, która przyjmuje dwa parametry.
    - pierwszy parametr to wartość, a drugi to potęga
    - funkcja ma zwracać wartość podniesioną do tej potęgi
 */

const powerNum = (num, power) => {
  return Math.pow(num, power);
}


// TODO: 2. Napisz funkcję, która zwraca losową liczbę w zakresie od 0 do 1.

const randomNum = () =>{
  return Math.random().toFixed(2);
}
console.log(randomNum());


// losowa liczba w zakresie od 0 do 5

const randomNum2 = ()=>{
  return (Math.random()*5).toFixed(3);
}
console.log(randomNum2());


// losowa liczba w zakresie od 0 do 5 ale CAŁKOWITE

const randomNum3 = ()=>{
  return (Math.random()*5).toFixed();
}
console.log(randomNum3());


// TODO: 3. Napisz funkcję, która zwraca losową liczbę w zakresie 0 do 10.

const randomNum4 = ()=>{
  return (Math.random()*10).toFixed(1);
}
console.log(randomNum4());


// TODO: 3. Napisz funkcję, która przyjmuje 3 parametry (liczby) i zwraca parametr z największą wartością

const maxNum = (num1, num2, num3) =>{
return Math.max(num1,num2,num3);
}
console.log(maxNum(1,3,2));


// TODO: 4. Napisz metodę, która przyjmuje 1 parametr (liczbę) i zaokrągla tą liczbę do całosci.

const roundNum = (val) =>{
  return Math.round(val);
}
console.log(roundNum(1.2121));


// TODO: 5. Napisz funkcję, która przyjmuje dwie liczby i zwraca resztę z dzielenia tych liczb.

const divisionNum = (val1,val2) =>{
  return val1 % val2;
}
console.log(divisionNum(10,2));


// TODO: 6. Napisz funkcję, która liczy pole koła (pi r^2). Wynik ma być podany z dokładnością do 2 cyfr po przecinku.

const circleArea = (r)=>{
  let value = 3.14*r;
return Math.pow(value,2).toFixed(2);
}
console.log(circleArea(2));

// TODO: 7. Napisz funkcję, która liczy deltę ( b^2 - 4ac). Wynik ma być zaokrąglony do całości.

const deltaCounting =(a,b,c)=> {
 let unfixedValue = Math.pow(b,2) - 4*(a*c);
 return unfixedValue.toFixed();
}
console.log(deltaCounting(2.12,1.123123,3.9));


/* TODO: 8. Zadeklaruj globalną zmienna var counter = 0;
    - następnie stwórz funkcję, która podbija wartość globalnej zmiennej o nazwie counter o jeden
      przy każdym wywołaniu.
    - następnie wywołają tą funkcję 3 razy i wyświetl w konsoli wartość zmiennej counter. */








