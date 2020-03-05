const student = [
    {id:23, name:'Omor sunny'},
    {id:21, name:'Mannaaaaaa'},
    {id:40, name:'Moiury'},
    {id:71, name:'Diploj'}
];

const output = [];
const name = student.map(s => s.name);
const ids = student.map(d => d.id);
const bigger = student.filter(big => big.id > 25);
const biggerOne = student.find( s => s.id > 23);
output.push(name);
console.log(biggerOne);
