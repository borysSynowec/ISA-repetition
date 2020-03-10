/*=====================================================
LINK: https://developer.mozilla.org /en-US/docs/Web/JavaScript/Reference/Global_Objects/String
=====================================================
Wskazówki do zadań:
- string.replace() - zmiana dowolnego znaku lub ciągu znaków
- string.split() - konwersja stringa do tablicy
- string.trim() - usunięcie whitespaces
- string.charAt() - odczytanie znaku na zadanym indeksie
- string.substring() - ekstrakcja części znaków ze stringa
- string.toLowerCase() - konwersja na wielkie litery
- string.toUpperCase() - konwersja na małe litery
- string.length - odczytanie ilości znaków */

// TODO: 1. Napisz funkcję, która przyjmuje parametr typu string, oraz zwraca liczbę jego znaków

const strLength = () => {
    let str = 'Danzig ist super!';
    return str.length;
}
console.log(strLength());


// TODO: 2. Napisz funkcję, która przyjmuje parametr typu string, a następnie zwraca go oczyszczonego z tzw. trailing spaces.

const cleanStr = () => {
    let str = '              my city   '
    return str.trim();
}
console.log(cleanStr())


/* TODO: 3. Poniższe zmienne, rozbij na tablicę liter, oczekiwany wynik to: ['R','a','m','b','o']:
    - var nameOne = 'Rambo';
    - var nameTwo = 'R_a_m_b_o';
    - var nameThree = 'ROX1aOX1mOX1bOX1o';
*/

const parseStringToArray = () => {
    const parseNameOne = () => {
        let nameOne = 'Rambo';
        return nameOne.split('');
    }
    console.log(parseNameOne());

    const parseNameTwo = () => {
        let nameTwo = 'R_a_m_b_o';
        return nameTwo.split('_');
    }
    console.log(parseNameTwo());

    const parseNameThree = () => {
        let nameThree = 'ROX1aOX1mOX1bOX1o';
        return nameThree.split('OX1');
    }
    console.log(parseNameThree());
}
parseStringToArray();


/* TODO: 4. Stwórz nowe zmienne na podstawie stringa name = "EXPIRED", które zawierają odpowiednio:
    - pierwsze 3 litery tego stringa
    - ostatnie 3 litery tego stringa
*/

const NewString = () => {
    let name = 'EXPIRED'
    const name1 = () => {
        return name.substring(7, 4)
    }

    const name2 = () => {
        return name.substring(3, 0)
    }

    let new1 = name1();
    let new2 = name2()
    console.log(new1);
    console.log(new2);
}
NewString();



// TODO: 5. Napisz funkcję o nazwie capitalize, która jako parametr przyjmuje stringa i go "kapitalizuje"

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
}
console.log(capitalize('pomerania'));


// TODO: 6. W zmiennej var url = 'users/{id}' podmień "{id}" na liczbę 3 i wynik przypisz do nowej zmiennej

const transformString = () => {
    const urlToReplaceFunction = () => {
        let urlToReplace = 'users/{id}';
        return urlToReplace.replace('{id}', 3);
    }
    let NewString = urlToReplaceFunction();
    console.log(NewString)
}
transformString();

/* TODO: 7. Napisz funkcję która przyjmuje parametr typu string, a następnie jednocześnie:
    - czyści go z whitespaceów
    - litery konwertuje na wielkie
    - zwraca 2 pierwsze znaki
*/

const Creazy = (str)=>{
return str.trim().toUpperCase().substring(2,0)
}
console.log(Creazy('wariat'));


