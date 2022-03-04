const students = [
    {id: 21, name: 'raiyan'},
    {id: 31, name: 'saim'},
    {id: 41, name: 'jisan'},
    {id: 71, name: 'imran'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);

console.log(biggerOne);