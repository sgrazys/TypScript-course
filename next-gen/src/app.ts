console.log(1410);

// const add = (n1: number, n2: number = 16) => n1 + n2;
// console.log(add(4));

// const printOutput: (a: string | number) => void = (a) => console.log(a);

const button = document.querySelector('button');

button?.addEventListener('click', (event) => {
	console.log(event);
});

const hobbies: string[] = ['Sport', 'Movies', 'Reading'];

const activeHobbies: string[] = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
	fName: '',
	age: 33,
};

const copiedPerson = { ...person, isMaried: true };

console.log(copiedPerson);
console.log(person);

const add = (...numbers: number[]) => {
	return numbers.reduce((t, acc) => t + acc, 0);
};

const addedNumbers = add(4, 7, 13, 77);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobies] = hobbies;

console.log(hobby1);
console.log(hobby2);
console.log(remainingHobies);

const { fName: userName = 'Tauras', age: metai = 12 } = person;

console.log(userName);
console.log(metai);
