var sports = ["plongée", "baseball"];
var total = sports.push("football", "tennis");

console.log(sports); // ["plongée", "baseball", "football", "tennis"]
console.log(total); // 4

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
const tropical = fruits.slice(2);
console.log(tropical); // ['Orange', 'Mango', 'Pineapple']


const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

let index = animals.indexOf('camel');

console.log(index); // Affiche Camel


const fs = require('fs');

let Student ={
    name : "Marie",
    age : 20,
    courses : [],
    grade : "A"
}

Student.age = 21;
Student.courses.push("Math", "Physics", "Chemistry");
let physicsIndex = Student.courses.indexOf("Physics");


/*
L'objet student complet avec toutes les modifications
L'index de "Physics"
*/

console.log(Student);
console.log(physicsIndex);
console.log(Student.courses.slice(1, 2));

// Exemple d'écriture dans un fichier
let contenu = `Student: ${JSON.stringify(Student, null, 2)}\n`;
contenu += `physicsIndex: ${physicsIndex}\n`;
contenu += `Premiers cours: ${JSON.stringify(Student.courses.slice(1))}\n`;

fs.writeFileSync('results.txt', contenu);
console.log('Fichier results.txt créé avec succès !');

