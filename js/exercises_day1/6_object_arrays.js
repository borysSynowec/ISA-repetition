/*====================================================
 OBJECT & ARRAY - GETTING VALUES
 ====================================================*/

// TODO: 1. Wyświetl w konsoli wartości elementów tablicy lakes

let lakes = ['Brodno', 'Witomino', 'Lebsko', 'Gardno'];
const northLakes = () => {
    return lakes.toString();
}
console.log(northLakes());


// TODO: 2. Wyświetl w konsoli liczbę elementów w powyższej tablicy skills

let skills = ['social', 'driving License', 'guitar playing'];
console.log(skills.length);


// TODO: 3. Wyświetl w konsoli wartości pól localization/ depth /size  z obiektu lake
var lake = {
    localization: 'tatra mountains',
    deepth: 60,
    size: 'big'
}
console.log(lake.deepth)
console.log(lake.size)
console.log(lake.localization)


// TODO: 4. Do tablicy users, dopisz dwóch dodatkowych userów

let users2 = ["Marek", "Michacz"];
users2.push("Bartnik", "Dans");
console.log(users2);


var usersObject = [
    { login: 'jarek', password: 'xxx' },
    { login: 'darek', password: '1234' },
];
usersObject.push({ login: 'marek', password: '666' });
usersObject.push({ login: 'michacz', password: '9090' });
console.log(usersObject);

// TODO 4.a) Wyświetl w konsoli login i password usera na indeksie "2" w tablicy users

console.log(usersObject[2])

/* TODO 4.b) Napisz funkcję, która jako parametr przyjmuje obiekt user i zwraca stringa:
 - "USER CREDENTIALS ARE: LOGIN_USERA : PASSWORD_USERA" */

const stringUser = () => {
    let jarekLogin = usersObject[0].login
    let jarekPassword = usersObject[0].password
    return 'USER CREDENTIALS ARE: ' + jarekLogin + ' LOGIN_USERA ' + jarekPassword + ' PASSWORD_USERA'
}
console.log(stringUser())


// TODO: 5. Wyśwetl w konsoli tablicę z frameworkami developera
var developer = {
    name: 'John Doe',
    city: 'Gdansk',
    otherInfo: {
        skills: {
            frameworks: ['Angular', 'React', 'Vue'],
            tools: ['Webstorm', 'Gulp', 'GIT']
        }
    }
};
console.log(developer.otherInfo.skills.frameworks)


// TODO: 6. Wyśwetl w konsoli tablicę z frameworkami drugiego developera
var developers = [
    {
        name: 'John Doe',
        otherInfo: {
            skills: {
                frameworks: ['Angular', 'React', 'Vue'],
                tools: ['Webstorm', 'Gulp', 'GIT']
            }
        }
    },
    {
        name: 'John Doe',
        otherInfo: {
            skills: {
                frameworks: ['Angular', 'React', 'Vue'],
                tools: ['Webstorm', 'Gulp', 'GIT']
            }
        }
    }
];
console.log(developers[1].otherInfo.skills.frameworks)

// TODO: 7. Wyświetl w konsoli kolejno wszystkie firmy w jakich pracował drugi pracownik tablicy workers
var workers = [
    {
        name: 'John',
        experience: [
            { years: '1998-2004', company: 'Google' },
            { years: '2004-2011', company: 'Microsoft' },
            { years: '2012-2015', company: 'Facebook' }
        ]
    },
    {
        name: 'Samanta',
        experience: [
            { years: '1998-2008', company: 'Infoshare' },
            { years: '2010-2014', company: 'Amazon' },
            { years: '2014-2017', company: 'Intel' }
        ]
    }
];
console.log(workers[1].experience[0].company)
console.log(workers[1].experience[1].company)
console.log(workers[1].experience[2].company)

