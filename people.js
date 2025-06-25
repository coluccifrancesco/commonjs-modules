const fullName = require('./names');
const hobbies = require('./hobbies')

function pNameNHobbies (){
    return fullName() + hobbies()
}

console.log(pNameNHobbies());