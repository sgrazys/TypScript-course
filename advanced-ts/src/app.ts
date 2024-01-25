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
	name: 'Tauras',
	privileges: ['Admin', 'Editor'],
	startDate: new Date('2018 7 02 16:45:00'),
};

console.log(e1.startDate);
