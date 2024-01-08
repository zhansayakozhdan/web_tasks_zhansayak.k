// let x = "hello";
// let y = "world!";

// alert(x + y);

// let a = parseInt(prompt('введите a'));
// let b = parseInt(prompt('введите b'));
// let sum = a + b;
// alert('сумма = ' + a + b);

// if (a === b) {
// 	console.log('equals')
// } else if (a < b) {
// 	console.log('OK');
// }

// console.log(Math.pow(b, 2));


function task1() {
	let x = parseInt(prompt('Insert x'));
	console.log(x ** 2 + 2 * x - 1);
}

function task2() {
	let a = parseInt(prompt('Insert a'));
	let b = parseInt(prompt('Insert b'));

	if (a % b == 0) {
		alert('Divisible');
	} else {
		alert('Not Divisible');
	}
}
// task1();
// task2();

function task3() {
	let name = prompt('Введите имя');
    let lastname = prompt('Введите фамилию');
    let city = prompt('Введите город');
    let age = prompt('Введите возраст');

    alert('Name: ' + name + '\n' + 
    'Lastname: ' +  lastname  + '\n' + 
    'City: ' + city + '\n' + 
    'Age: ' + age);
}
//task3();

function task4() {
    let a = parseInt(prompt('Enter a'));
    let b = parseInt(prompt('Enter b'));
    let c = parseInt(prompt('Enter c'));

    alert('a + b + c = ' + (a + b+ c) + '\n' + 'a - b - c = ' + (a - b - c) + '\n'+ 'a * b * c = ' + (a * b * c));
}
//task4();

function task5() {
    let n = parseInt(prompt('Enter n'));
    let k = parseInt(prompt('Enter k'));
    alert(k/n);
}
task5();


// let array = [1, 3, 5];
// let array1 = new Array();

// console.log(array[1]);

// let months = ['January', 'February'];
// months.push('March');
// console.log(months[2]);

// months.unshift('December');
// console.log(months[0]);

// months.pop();   //удаляет последний элемент
// console.log(months);

// months.shift();    //удаляет первый элемент
// console.log(months);

// console.log(months.indexOf('February'));
// console.log(months.includes('February'));

// let friends = ['Abylai', 'Dina', 'Arman'];

// let person = {
//     name: 'Anet',
//     age: 20,
//     address: 'Almaty, Abay str',
//     friends: ['Zhansaya', 'Dina', 'Arman']
// };

// console.log(person.name);
// console.log(person.friends);