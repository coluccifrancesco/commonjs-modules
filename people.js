const fullName = require('./names');
const hobbies = require('./hobbies')

function nameNHobbies (){

    return {
        fullName: fullName('Francesco', 'Colucci'),
        hobbies: hobbies('x', 'y', 'z')
    }
}

console.log(nameNHobbies());