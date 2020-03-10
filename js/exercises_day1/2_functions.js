/*
// TODO: 1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem*/

const Lake = () =>{ 
let tatraLake = 'Morskie Oko';
return tatraLake
}
console.log(Lake());


/* TODO: 2. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName a następnie:
    - zwraca stringa z powitaniem, np: 'Hello my dear Tomek!'
    - wynik funkcji przypisz do zmiennej o nazwie greeting
    - zadeklaruj funkcję jako function declaration oraz jako function expression */

function GreetingSomebody(firstName,lastName){
  let greeting = 'Hello'
  return greeting +" "+firstName+" "+lastName+"!"
}
console.log(GreetingSomebody('Denis','Urubko'));

/* TODO: 3. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName. Następnie:
    - zwraca stringa z powitaniem (wykorzystaj z funkcję z TODO1!) a do powitania
      dokleja stringa "I love you!"*
    - oczekiwana zwrotka: "Hello my dear firstName lastName! I love you!" */

const GreetingSomebody2 = (firstName,lastName) => {
  let greeting = 'Hello';
  let ending = 'you are cool';
  return greeting+" "+firstName+" "+lastName+" "+ending+"!"
}
console.log(GreetingSomebody2('George','Mallory'));
