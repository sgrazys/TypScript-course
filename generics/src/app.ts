function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const merged = merge({ name: 'saulius', hobbie: ['hiking', 'coding'] }, { age: 34 });
console.log(merged);

class dataStorage<T> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;

	return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Sau', 'Anna'];

// names.push('Tau');
// names.pop();
