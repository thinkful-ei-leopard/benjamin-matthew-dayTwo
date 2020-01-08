//1
let loaf = {
    flour: 300,
    water: 210,
    hydration() {
        return this.water/this.flour*100;
    }
}
console.log(`Flour: ${loaf.flour} Water: ${loaf.water}`);
console.log(`Loaf Hydration: ${loaf.hydration()}`)

//2
let object = {
    foo: 'i',
    bar: 'like',
    fum: 'to',
    quux: 'make',
    spam: 'apps'
}

for(const property in object) {
    console.log(`${property}: ${object[property]}`)
}

//3
let hobbitMeals = {
    meals: [
        'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'
    ]
}
console.log(hobbitMeals.meals[3]);

//4 && 5
let jobs = [
    {
        name: 'Andrea',
        jobTitle: 'Thinkful Instructor'
    },
    {
        name: 'Matthew',
        jobTitle: 'Thinkful Student',
        boss: 'Andrea'
    },
    {
        name: 'Benajmin',
        jobTitle: 'Thinkful Student',
        boss: 'Andrea'
    }
]

for(let i = 0; i < jobs.length; i++) {
    let obj = jobs[i];
    console.log(`${obj.jobTitle} ${obj.name} ` + (obj.boss ? ` reports to ${obj.boss}.` : `doesn't report to anybody.`));
}

//6
const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

function decode(word) {
    let c = word[0];
    for(const i in cipher) {
        if(c === i) {
            return word[cipher[i] - 1]
        }
    }
    return ' ';
}

function decodeWords(words) {
    let code = '';
    let split = words.split(' ');
    for(let i = 0; i < split.length; i++) {
        code += decode(split[i]);
    }
    return code;
}

console.log(decode('craft'));
console.log(decodeWords('craft block argon meter bells brown croon droop'));

//7
function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe() {
            return `${this.name} is a ${this.race} from ${this.origin}.`;
        },
        evaluateFight(character) {
            let opponentDamage = (this.attack - character.defense < 0 ? 0 : this.attack - character.defense);
            let yourDamage = (character.attack - this.defense < 0 ? 0 : character.attack - this.defense);
            return `Your opponent takes ${opponentDamage} damage and you receive ${yourDamage} damage.`;
        }
    }
}

let characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
    createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 6, 7)
]

function findByNickAndDescribe(nick) {
    return characters.find(e => e.nickname === nick).describe();
}
console.log(findByNickAndDescribe('aragorn'));

function onlyHobbits() {
    return characters.filter(e => e.race === 'Hobbit');
}
onlyHobbits().forEach(e => {
    console.log(e.name, e.race);
})

function attackAboveFive() {
    return characters.filter(e => e.attack > 5);
}
attackAboveFive().forEach(e => {
    console.log(e.name, e.attack);
})

//8
const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
    
}

const Database = {
    store: {
      heroes: [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ]
    },
    findOne() {

    }
};

