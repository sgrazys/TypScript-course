let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Vin';
if (typeof userInput === 'string') {
	userName = userInput;
}

function generateError(message: string, code: number) {
	throw { message: message, errorCode: code };
}

generateError('An error accured', 500);
