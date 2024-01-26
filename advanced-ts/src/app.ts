type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: 'Saulius',
	privileges: ['editor'],
	startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b?.toString();
	}

	return a + b;
}

const result = add('Tauras', 'Gra');
result.split(' ');

const fetchedUserDate = {
	id: 'u1',
	user: 'Valius',
	job: {
		title: 'OEC',
		description: 'Gnom industry',
	},
};

console.log(fetchedUserDate?.job?.title);

const userInput = null;
const storedData = userInput ?? 'No data';

console.log(storedData);
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
// 	console.log(emp.name);

// 	if ('privileges' in emp) {
// 		console.log('Priveleges: ' + emp.privileges);
// 	}

// 	if ('startDate' in emp) {
// 		console.log('Start date: ' + emp.startDate);
// 	}
// }

// printEmployeeInformation(e1);

// printEmployeeInformation({ name: 'Jokubas', startDate: new Date() });

// class Car {
// 	drive() {
// 		console.log('Driving.....');
// 	}
// }

// class Truck {
// 	drive() {
// 		console.log('Driving truck....');
// 	}

// 	loadCargo(amount: number) {
// 		console.log('Loading cargo... ' + amount);
// 	}
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
// 	vehicle.drive();
// 	if (vehicle instanceof Truck) vehicle.loadCargo(1000);
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
// 	type: 'bird';
// 	flyingSpeed: number;
// }

// interface Horse {
// 	type: 'horse';
// 	runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function movieAnimal(animal: Animal) {
// 	let speed;
// 	switch (animal.type) {
// 		case 'bird':
// 			speed = animal.flyingSpeed;
// 			break;
// 		case 'horse':
// 			speed = animal.runningSpeed;
// 		default:
// 			break;
// 	}

// 	console.log('Moving at speed ' + speed);
// }

// movieAnimal({ type: 'bird', flyingSpeed: 88 });
// movieAnimal({ type: 'horse', runningSpeed: 45 });

// const userInputEl = document.getElementById('output-message');

// if (userInputEl) {
// 	(userInputEl as HTMLInputElement).value = 'Hello there';
// }

// interface ErrorContainer {
// 	[prop: string]: string;
// }

// const erorrBag: ErrorContainer = {
// 	email: 'Not a valid email',
// 	username: 'Must start with a capital letter',
// };
