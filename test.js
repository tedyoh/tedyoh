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

// function showMessage(message, from='unknown') {
//     console.log('${message} by ${from}');
// }
// showMessage('Hi!');

// const dog = {type:"shepperd", name:"ordry", owner:{name:"emily"}};
// console.log(dog);

// function User(name, age) {
//     this.name = name;
//     this.name = age;
//     console.log(name, age);
// }

// new User('kim', '28');


// function Item(title, price) {
//     this.title = title;
//     this.price = price;

//     this.showPrice = function() {
//         console.log('가격은 '+price+'원 입니다.');
//         // console.log('가격은 ${price}원 입니다.');
//     }
// }

// const item1 = new Item("인형", 3000);
// const item2 = new Item("가방", 4000);
// const item3 = new Item("지갑", 9000);

// console.log(item1, item2, item3);
// item3.showPrice();


// // 전개 연산자(Spread Operator)
// let obj1 = { name: '박문수', age: 29 }; 
// let obj2 = { ...obj1 }; 
// let obj3 = { ...obj1, email: 'mspark@test.com' }; 

// console.log(obj2); 
// console.log(obj3); 
// console.log(obj1 == obj2); // false 

// let arr1 = [ 100, 200, 300 ]; 
// let arr2 = [ 'hello', ...arr1, 'world' ]; 

// console.log(arr2);

// promise
// var p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         var num = Math.round(Math.random()*20);
//         var isValid = num % 2;
//         if (isValid) { resolve(num); }
//         else { reject(num); }
//     }, 2000);
// });

// p.then(function(num) {
//     console.log('홀수 : ' + num);
// }).catch(function(num) {
//     console.log('짝수 : ' + num);
// });

// console.log('20까지의 난수 중 홀수/짝수>');
// console.log('결과는 2초 후에 나옵니다!!');

// class Person {
//     constructor(name, tel, address) {
//         this.name = name;
//         this.tel = tel;
//         this.address = address;
//         if (Person.count) { Person.count++; } else { Person.count = 1; }
//     }
//     static getPersonCount() {
//         return Person.count;
//     }
//     toString() {
//         // return 'name = '+name+, 'tel = '+tel+, 'address = '+address;
//         return `name=${name}, tel=${tel}, address=${address}`;
//     }
// }

// var p1 = new Person('이몽룡', '010-111-2222', '경기도');
// var p2 = new Person('홍길동', '010-333-4444', '서울');
// console.log(p1.toString());
// console.log(Person.getPersonCount());



const user = {
    [1+4] : 5,
    ["안녕"+"하세요"] : "Hello"
}

console.log(user);