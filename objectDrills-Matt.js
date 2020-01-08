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

let jobs = [
    {
        name: 'Robert',
        jobTitle: 'Production Supervisor'
    },
    {
        name: 'Andrew',
        jobTitle: 'Ski Instructor'
    },
    {
        name: 'Stephen',
        jobTitle: 'Facilities Worker'
    },
    {
        name: 'Andrea',
        jobTitle: 'Thinkful Instructor'
    }
]

for(let i = 0; i < jobs.length; i++) {
    let obj = jobs[i];
    console.log(`${obj.name}: ${obj.jobTitle}`)
}

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