/*====================================================
 OBJECT & ARRAY - GETTING VALUES
 ====================================================*/

// TODO: 1. Wyświetl w konsoli wartości elementów tablicy lakes

// TODO: 2. Wyświetl w konsoli liczbę elementów w powyższej tablicy skills

console.log(lakes.length)

// TODO: 3. Wyświetl w konsoli wartości pól name / depth /  z obiektu lake
var lake = {
    localization: 'tatra mountains',
    deepth: 60,
    size: 'big'
}

// TODO: 4. Do tablicy users, dopisz dwóch dodatkowych userów


// TODO 4.a) Wyświetl w konsoli login i password usera na indeksie "2" w tablicy users

console.log(users[1]);


/* TODO 4.b) Napisz funkcję, która jako parametr przyjmuje obiekt user i zwraca stringa:
 - "USER CREDENTIALS ARE: LOGIN_USERA : PASSWORD_USERA" */



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

console.log(developer.otherInfo.skills.frameworks);

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


