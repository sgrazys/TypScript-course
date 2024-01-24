// const person: {
// 	name: string;
// 	age: number;
// } = {
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: 'Vincas',
// 	age: 40,
// 	hobbies: ['Reading', 'Cooking'],
// 	role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
	ADMIN = 5,
	READ_ONLY,
	AUTHOR = 14,
}

const person = {
	name: 'Vincas',
	age: 40,
	hobbies: ['Reading', 'Cooking'],
	role: Role.ADMIN,
};

// person.role.push('admin')
// person.role[1] = 10;

// person.role = [3, 'admin', 'super'];

let favActivities: string[];
favActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map()); !!! ERORR !!!
}

if (person.role === Role.AUTHOR) {
	console.log('Person is admin');
}
