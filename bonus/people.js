const fullName = require('../names');
const hobbies = require('../hobbies')

function nameNHobbies (x, y){

    return {
        fullName: x,
        hobbies: y
    }
}

console.log(nameNHobbies(fullName('Francesco', 'Colucci'), hobbies('Mtb', 'Watches', 'Cars')));
console.log(nameNHobbies(fullName('Paolo', 'Duzioni'), hobbies('No-bug code', 'Stardew Valley', 'Hungary')));
console.log(nameNHobbies(fullName('Artur', 'Mamedov'), hobbies('Freud', 'Clean Coding', 'Backend')));
console.log(nameNHobbies(fullName('Fabio ', 'Pacifici'), hobbies('Php', 'Cats', 'Star Wars')));
console.log(nameNHobbies(fullName('Marco ', 'Lancillotti'), hobbies('Boolean', 'Languages', 'Sicily')));