interface FullName {
    firstName: string,
    lastName: string,
}

interface Callback {
    (result: number): void, 
}

const person: FullName = { firstName: 'Allan', lastName: 'Camilo' }
const LogLength: Callback = function(length: number) {
    console.log(`The passed length is ${length}`);
}

function logFullNameLength(fullName: FullName, callback: Callback) {
    const fullNameLength = (fullName.firstName.length + fullName.lastName.length); 
    callback(fullNameLength);
}

logFullNameLength(person, LogLength);