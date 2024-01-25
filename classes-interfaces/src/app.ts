// type AddFn = (a: number, b: number) => number;
interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
	return n1 + n2;
};

const sum = add(4, 7);
console.log('SUM = ' + sum);

interface Named {
	readonly name?: string;
	outputName?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name?: string;
	age = 44;

	constructor(n?: string) {
		if (n) this.name = n;
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + ' ' + this.name);
		} else {
			console.log('Aloha!');
		}
	}
}

let user1: Greetable;

user1 = {
	name: 'Vincas',
	// age: 44,

	greet(phrase: string) {
		console.log(phrase + ' ' + this.name);
	},
};

user1.greet('Hello my name is');

const user2 = new Person();
user2.greet('Lab dein, main neim many badyn Kaziuku, bet vords yra lygus');
console.log(user2);
