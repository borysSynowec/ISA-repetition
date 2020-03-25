/* TODO.1 Napisz instrukcję IF  / ELSE, która:
 - wyświetli console.log("Cześć, jestem junior devem!") w przypadku,
  jeśli zmienna developer jest równa 'junior js dev'
 - a jeśli nie jest, to wyświetli ("Jednak nie junior dev:( ");
 */

let developer = 'junior js dev'
if (developer === 'junior js dev') {
    console.log('hura jestem junior devem')
} else {
    console.log('jednak nie')
}


/* TODO.2: Napisz instrukcję IF / ELSE IF / ELSE, która:
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest >= 67
    - wyświetli console.log("Średni wiek!") jeśli Twój wiek jest < 67 i > 33
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest <= 33 i > 18
    - wyświetli console.log("Hej młodziaku!") jeśli Twój wiek jest <= 18
 */
const ageFunction = age => {
    if (age >= 67) {
        console.log('emerytura')
    } else if (age < 67 && age >= 21) {
        console.log('sredni wiek')
    } else {
        console.log('ty dzieciorze')
    }
}


/* TODO.3: Napisz funkcję, która zwraca true jeśli:
    - wartość zmiennej skill jest równa 'javaScript' lub 'HTML' lub 'CSS'
 */
const skillFunction = skill => {
    if (skill === 'JS' || skill === 'HTML' || skill === 'CSS') {
        return true
    } else {
        return false
    };
}

/* TODO.4: Napisz funkcję, która przyjmuje jako parametr stringa i zwraca true jeśli:
 - wartość przyjętego parametru jest różna od słowa JavaScript
 */
const stringCheck = string => {
    if (string != 'JavaScript') {
        return true
    } else {
        return false
    }
}


/* TODO.5: Napisz funkcję isShopOpen, która przyjmuje jako parametr liczbę i zwraca true jeśli:
 - wartość parametru jest mniejsza niż 23 i większa od 6
 */
const isShopOpen = openHours => {
    if (openHours > 6 && openHours < 23) {
        return true
    } else {
        return false
    }
}


/* TODO.6: Wykorzystując funkcję isShopOpen i negację (!), napisz funkcję isShopClosed
    - która zwraca true, jeśli sklep jest zamknięty (czyli neguje wartość zwróconą z isShopOpen)
 */

const isShopClosed = (closedHours) =>{
    if (closedHours >! 6 && closedHours <! 23) {
        return false
    } else {
        return true
    }
}









