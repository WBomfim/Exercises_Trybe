import Student from './Student';
import Employee from './Employee';
import Subject from './Subject';
import Teacher from './Teacher';

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

console.log(carolina);
console.log(lucas);

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta Silva', new Date('1980/01/01'), 5000, math);
const jose = new Teacher('José da Silva', new Date('1980/01/01'), 5000, history);

console.log(marta);
console.log(jose);

////////////////////////////////////////////////////////////////////////////////////
