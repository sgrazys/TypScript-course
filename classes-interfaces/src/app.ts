abstract class Department {
	static fiscalYear = 2020;
	// private id: string;
	// private name: string;
	protected employees: string[] = [];

	constructor(public name: string, protected readonly id: string) {
		// this.name = name;
		// this.id = id;
		// console.log(Department.fiscalYear);
	}

	static createEmployee(name: string) {
		return { name };
	}

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	constructor(id: string, public admins: string[]) {
		super('IT', id);
	}

	describe() {
		console.log(`IT Deoartment ID: ${this.id}`);
	}
}

class AccountDepartment extends Department {
	private lastReport: string;
	private static instance: AccountDepartment;

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}

		throw new Error('No reports found');
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please privide a report.');
		}
		this.addReport(value);
	}

	private constructor(id: string, private reports: string[]) {
		super('Accounting', id);
		this.lastReport = reports[0];
	}

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}

		this.instance = new AccountDepartment('d13', []);
		return this.instance;
	}

	describe() {
		console.log(`Accounting Department ID: ${this.id}`);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReport() {
		console.log(this.reports);
	}

	addEmployee(employee: string) {
		if (employee === 'Saulius') {
			return;
		}

		this.employees.push(employee);
	}
}

const employee1 = Department.createEmployee('Vincas');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('4141011', ['Tauras']);
console.log(it);
it.describe();

it.addEmployee('Jokubas');
it.addEmployee('Tauras');
it.printEmployeeInformation();

// const accounting = new AccountDepartment('D1', []);
const accounting = AccountDepartment.getInstance();
const accounting2 = AccountDepartment.getInstance();

accounting.mostRecentReport = 'Year end.';

accounting.addEmployee('Marija');
accounting.addEmployee('Luka');

accounting.addReport('No issues detected in 2023 report');
console.log(accounting.mostRecentReport);
accounting.printReport();
accounting.printEmployeeInformation();

accounting.addEmployee('Algymantas');
accounting.addEmployee('Saulius');

accounting.printEmployeeInformation();

accounting.addReport('IV balance is 95% of expected results.');

console.log(accounting);

console.log(accounting.mostRecentReport);

accounting.describe();
it.describe();
