// function printHello() {
//     console.log('Hello');
// }
// printHello();

// function log(message) {
//     console.log(message);
// }
// log('Hello@');

// function changeName(obj) {
//     obj.name = 'coder';
// }
// const ellie = {name : 'ellie'};
// changeName(ellie);
// console.log(ellie);

function showMessage(message, from) {
    if(from === undefined) {
        from = 'unknown';
    }
    console.log('${message} by ${from}');
}
showMessage('Hi!');