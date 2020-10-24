var person = { firstName: 'Allan', lastName: 'Camilo' };
var LogLength = function (length) {
    console.log("The passed length is " + length);
};
function logFullNameLength(fullName, callback) {
    var fullNameLength = (fullName.firstName.length + fullName.lastName.length);
    callback(fullNameLength);
}
logFullNameLength(person, LogLength);
