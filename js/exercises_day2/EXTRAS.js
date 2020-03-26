var users = [
    { login: 'Bon@yth', pin: 3410, password: 'w@4x@' },
    { login: 'Aver@num', pin: 5511, password: 'qa@a@xx@x' },
    { login: 'Ko@get', pin: '2220', password: '4@311' },
    { login: 'Dra@co', pin: 8890, password: 'v@v@' },
    { login: 'Rave@n', pin: '6551', password: 'an@ia15' },
    { login: 'Spa@wn', pin: 1211, password: 'q@we@' }
];

// TODO: 1. Puść pętlę po tablicy users. Sprawdź czy pin jest liczbą, jeśli nie to przerób go na liczbę

for (i = 0; i < users.length; i++) {

    if (typeof (users[i].pin) == 'string') {
        console.log('pin tego uzytkownika zostal zamieniony ze stringa na number: ' + users[i].login)
        console.log(parseInt(users[i].pin))
    }
}


for (i = 0; i < users.length; i++) {

    if (typeof (users[i].pin) == 'string') {
        users[i].pin = parseInt(users[i].pin)
    }
}


let a = '1--------------------------------------'
console.log(a)
// TODO: 2. Puść pętlę po tablicy users. Dodaj dynamicznie do obiektów pole isPasswordOK,
// które ma mieć wartość true jeśli password jest dłuższy niż 5 liter, a jak nie to false

for (i = 0; i < users.length; i++) {
    if (users[i].password.length > 5) {
        users[i]['isPasswordOK'] = true;
    }
    else {
        users[i]['isPasswordOK'] = false;
    }
}
console.log(users)


let b = '2--------------------------------------'
console.log(b)

// TODO: 3. Puść pętlę po tablicy users. Usuń znak @ z każdego loginu.

for (i = 0; i < users.length; i++) {
    users[i].login = users[i].login.replace('@', '')

}
console.log(users)


let c = '3--------------------------------------'
console.log(c)
// TODO: 4. Puść pętlę po tablicy users. Usuń znak @ z każdego password.

for (i = 0; i < users.length; i++) {
    users[i].password = users[i].password.replace('@', '')
}
console.log(users)


let d = '4--------------------------------------'
console.log(d)

// TODO: 5. Puść pęte po tablicy users. Wyświetl w konsoli login z parzystych rekordów tablicy.

let zleopisanezadanie = 'zle opisane zadanie'
console.log(zleopisanezadanie)


let e = '5--------------------------------------'
console.log(e)

// TODO: 6. Puść pęte po tablicy users. Wyświetl w konsoli login z nieparzystych rekordów tablicy.

let zleopisanezadanie2 = 'zle opisane zadanie'
console.log(zleopisanezadanie2)


let f = '6--------------------------------------'
console.log(f)

// TODO: 7. Napisz funkcję, która przerobi zdanie "ala ma kota" na zdanie "Ala Ma Kota".

let zdanie = 'ala ma kota'
const przerobkaZdania = () => {
    return zdanie.charAt(0).toUpperCase() + zdanie.substr(1, 3) + zdanie.charAt(4).toUpperCase() + zdanie.substr(5, 2) + zdanie.charAt(7).toUpperCase() + zdanie.substr(8, 3)
}
console.log(przerobkaZdania())


// 

let zdanie2 = 'ala ma kota'
let tab = [...zdanie2]
const przerobkaZdania2 = () => {
    tab[0] = 'A',
        tab[4] = 'M',
        tab[7] = 'K'

    return tab.join("")
}
console.log(przerobkaZdania2())

//

const przerobkaZdania3 = () => {
    let zdanie3 = 'ala ma kota i psa'
    let splitZdanie = zdanie3.toLowerCase().split(' ');

    for (i = 0; i < splitZdanie.length; i++) {
        splitZdanie[i] = splitZdanie[i].charAt(0).toUpperCase()+ splitZdanie[i].substring(1);
    }
    return splitZdanie.join(' ');

}
