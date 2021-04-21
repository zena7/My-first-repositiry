import {isAnagram} from './js-files/is-anagram'

// import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
import "normalize.css";
import "./index.css";

// // let vasya = { name: 'Вася', age: 25 };
// // let petya = { name: 'Петя', age: 30 };
// // let masha = { name: 'Маша', age: 28 };

// // let users = [ vasya, petya, masha ];

// // function namify(users) {

// //   return users.map(item => item.name); 
// // };

// // let names = namify(users);
// // console.log(names);


// // let str = '-webkit-transition';

// // let arraySliced = [];
// // let arrayRegistr = [];

// // function camelize(str) {
// //   console.log(arraySliced = str.split("-").map( item => item.slice(1)));
// //   console.log(arrayRegistr = str.split("-").map((item, index) => {
// //     if(index > 0) {
// //       return item[0].toUpperCase()
// //     }return item[0]
// //   }));
// //   return arrayRegistr.map((item, index) => item + (arraySliced[index])).join('')
// // };

// // let result = camelize(str);
// // console.log(result);

// // let str = 'my-short-string';

// // function camelize(str) {
// //   let arr = str.split('-').map((item, index) => {
// //     if(index > 0) {
// //       return item[0].toUpperCase()+item.slice(1);
// //     } return item;
// //   });
  
// //   return arr.join('');
// // };

// // let result = camelize(str);
// // console.log(result);



// // let user1 = {
// //   "balance": "$1,825.65",
// //   "picture": "https://placehold.it/32x32",
// //   "age": 21,
// //   "name": "Golden Branch",
// //   "gender": "male",
// //   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
// //   "favouriteFruit": "banana"
// // };

// // let user2 = {'index': 3,
// // 'guid': '51855992-a0e7-4821-8178-92bcd13a1f0c',
// // 'isActive': true,
// // 'balance': '$1,072.95',
// // 'picture': 'https://placehold.it/32x32',
// // 'age': 40,
// // 'eyeColor': 'brown',
// // 'name': 'Helga Nixon',
// // 'gender': 'female',
// // 'company': 'KENEGY',
// // 'email': 'helganixon@kenegy.com',
// // 'phone': '+1 (832) 595-2918',
// // 'address': '658 Scholes Street, Day, Illinois, 3262',
// // 'about': 'Labore id aute id voluptate do sint ex veniam dolor do non velit. Proident consectetur ipsum laboris ea aliquip ea. Incididunt ut labore incididunt sunt ipsum ipsum Lorem quis proident nulla sit cillum duis. Veniam labore aliqua in elit aute. Pariatur deserunt dolore fugiat mollit. Excepteur ea nostrud aliquip officia fugiat. Occaecat elit elit consectetur et commodo aliqua reprehenderit eu nulla excepteur.\r\n',
// // 'registered': '2015-09-27T01:16:15 -03:00',
// // 'latitude': 63.00501,
// // 'longitude': -27.098594,
// // 'tags': [
// //   'consequat',
// //   'reprehenderit',
// //   'quis',
// //   'esse',
// //   'sint',
// //   'dolore',
// //   'amet'
// // ],
// // 'friends': [
// //   {
// //     'id': 0,
// //     'name': 'Andrews Sharp'
// //   },
// //   {
// //     'id': 1,
// //     'name': 'Leona Jacobson'
// //   },
// //   {
// //     'id': 2,
// //     'name': 'Marie Parker'
// //   }
// // ],
// // 'greeting': 'Hello, Helga Nixon! You have 3 unread messages.',
// // 'favouriteFruit': 'banana'
// // };

// // let users = [user1, user2 ];
// // console.log(users);


// // let a = {
// //   "age": 21,
// // "name": "Golden Branch",
// // "gender": "male",
// // };

// // let b = {
// //   "age": 50,
// //   "name": "Maxim Alyoshin",
// //   "gender": "male",
// // };

// // let c = {
// //   "age": 33,
// //   "name": "Natali Zernova",
// //   "gender": "female",
// // };
// // let array =[ a, b, c];


// // function chooseBoyfriend(user, age){
// //   return array.filter(item => {
// //     if ({age} <= age) {
// //       return {name}; 
// //     });
// // };
// //   let myBoy = chooseBoyfriend(array, 30);
// //   console.log(myBoy);




// // function showSalary(users, age) {
// //  return users.filter(item => {
// //    if (item.age <= age) {
// //      item.name;
// //    }});
// //  };

// //  let oldUsers = showSalary(users, 60);
// //  console.log(oldUsers);









// //  let arr = users.map(item => {
// //     if ( item.age <= age){
// //       return item.name + item.balance;
// //     };
// //     console.log(arr.join(", "));
// //   }
// // )};
// // let g = showSalary(users, 30);
// // console.log(g);






// // let user = {
// //   name: "Max",
// //   age: 33,
// //   city: "Moscow",
// // };
// // function getUser (name, cam){
// //   if (cam(user)){
// //     return user.name;
// //   };
// //   return null;
// // };

// // let isFromMoscow = ({city}) => city === "Moscow";

// // let h = getUser(user, isFromMoscow);
// // console.log(h)


// // let firstName = "Nata";
// // let secondName = "Zernova";
// // let age = 26;

// // const user = {
// //   firstName: "Nata",
// //   secondName: "Zernova",
// //   age: 26
// // }
// // user.firstName = "Nataly";

// // console.log(user);
// // let Max = Object.assign({}, user);
// // Max.age = 33;

// // let {firstName, secondName, age} = user;


// // let homeAnimal ={
// //   name: "LYNA",
// //   kind: "dog",
// //   age: 1.6,
// //   nature: "happy",
// //   eyes: "Big and beautiful",
// //   printName() {
// //     console.log(` Hi, ${this.name[0].concat(this.name.slice(1).toLowerCase())}`)
// //   }
// // } 
// // homeAnimal.printName();

// // function getFullName ({name, surname, age}) {
// //   return (name, surname, age);
// // };
// // console.log(getFullName(homeAnimal));




// // homeAnimal.options = {
// //   eat: 'so many',
// //   walk: 'every day'
// // }

// // const newAnimal = { ...homeAnimal, options: { ...homeAnimal.options} };

// // console.log(newAnimal);


// // // function telephoneNumber(user){
// // //   return { ...user, phone: '+79101210219'}
// // //    }; 

// //  let telephoneNumber = user => {
// //    return { ...user, phone: '+79101210219'}
// //  };

// //  let newHomeAnimal = telephoneNumber(homeAnimal);
// //  console.log(newHomeAnimal);


// //  let userN = {
// //    name: 'Nata',
// //    age: 26,
// //    sex: 'femaile',
// //    adress: {
// //      str: 'Nevzorovich',
// //     //  house: 7
// //    },
// //    city: 'Moscow',
// //  };

// // function isFromMoscow(user){
// // return city === 'Moscow';
// // }

// // let fromMoscow = ({user}) => city === 'Moscow';


// //  function newFulladress(user) {
// //   const street = user.adress.str || 'Street';
// //   const dom = user.adress.house || '34б';

// //   return `Street: ${street}, house number: ${dom}`;
// // };

// // let n = newFulladress(userN);
// // console.log(n);

// //  let phoneNumber = user => {
// //    return {...user, tel: '+79101210219'}
// //  };

// //  let newUser = phoneNumber(userN);
// //  console.log(newUser);

// // // let { age = Number(prompt("Какой возраст  вашего животного?")), name:klichka = "Ириска", kind, ...opt} = homeAnimal;

// // // console.log(klichka);
// // // console.log("KIND", kind);
// // // console.log(age);
// // // console.log(opt);


// // let [userName, , userSurname, ...other] =  "Nataly Zernova Maxim Alyoshin 33".split(" ");
// // // console.log("other", other);

// //  let array = "Nataly Zernova".split(" ");
// //  console.log(array);

// // console.log("userName", userName);
// // console.log("userSurname", userSurname);










// // console.log(secondName);
// // console.log(firstName);

// // console.log(Max);
// // console.log(user);


// // for (let i in user){
// //   console.log( i, user[i] );
// // }


// // let people = [
// //   {name: 'Nata', age: 25, budget: 40000},
// //   {name: 'Max', age: 33, budget: 1000000},
// //   {name: 'Sasha', age: 45, budget: 500 },
// //   {name: 'Misha', age: 14, budget: 10},
// //   {name: 'Tanya', age: 60, budget: 5},
// //   {name: 'Petr', age: 70, budget: 40000}

// // ];

// // for (const i of people) {
// // console.log(people[i]);
// // };

// // people.forEach(function(person, index){
// //   if (index >= 2){
// // console.log(person)
// // }});

// // people.forEach(person => console.log(person.name));

// // const newPeople = people.map(item => `${item.name} (${item.age})`)
// // console.log(newPeople);

// // const peopleAge = people.filter(item => item.age >= 40);

// // const peopleAge = people.filter(item => {
// //   if (item.age >= 40) {
// //   return true ;
// // }});

// // console.log(peopleAge);

// // const sumSalarys = people.reduce((sum, person, index) => {
// //   if( index >= 2) {
// //     sum += `${person.name} `;
// //     return sum }}); 

// // // ?????????????? Как получить строку имен без 0??????
// // console.log(`Collig's names: ${sumSalarys}`)
// // // console.log(people[0].name)






// // let people = [
// //   {name: 'Nata', age: 25, budget: 40000},
// //   {name: 'Max', age: 33, budget: 1000000},
// //   {name: 'Sasha', age: 45, budget: 500 },
// //   {name: 'Misha', age: 14, budget: 10},
// //   {name: 'Tanya', age: 60, budget: 5},
// //   {name: 'Petr', age: 70, budget: 40000}
// // ];

// // const colligsNames = people.reduce((sumNames, person) => sumNames += `${person.name} `, '');  

// // console.log(`Collig's names: ${colligsNames}`);
// // console.log(typeof(colligsNames ))

// // console.log( people.find(person => person.name === 'Misha'))

// // console.log(people
// //   .filter(item => item.budget >= 1000)
// //   .map(item => {
// //     return {
// //     info: `${item.name} (${item.age})`, 
// //     budget: item.budget}})
// //     .reduce((sum, salary) => sum + salary.budget, 0));






// // КУРСЫ от 28 февраля
// let h  = 'Hi'
// function solution(str){
//   return str.split('').reverse().join('') 
// }
// console.log(solution(h));

// let line = 'Hii'
//  let reversedLine = !isNaN(line) ? line
// .toString()
// .split('')
// .reverse()
// .join('') :line
// .split('')
// .reverse()
// .join('');

// // console.log(reversedLine);
// console.log( line == reversedLine);


// let line = 66;
// let reversedLine;

// if (isNaN(line)){
// reversedLine = line.split('').reverse().join('');
// console.log( line === reversedLine);
// } else {
//    let lineString = line.toString();
//    let reverLineString = lineString.split('').reverse().join('');
//    console.log( lineString === reverLineString);
// // }

// // function isPalindrome(line)
// //   if (isNaN(line)) {
// //   let reversedLine = line.split('').reverse().join('');

// //   return line === reversedLine;  
// //   };
// // };
// //   isPalindrome('1221');
//   // return line.toString() === reversedLine;
//   // };  

// //   function isPalindrome(line) {
// //     if (isNaN(line)){
// //       reversedLine = line.split('').reverse().join('');
      
// //       return line === reversedLine;
// //  };
// //     let lineString = line.toString();
// //     let reverLineString = lineString.split('').reverse().join('');
// //     return lineString === reverLineString;
// //  }

// //   function isAnagram (test, original) {
// //     console.log((test.split('').sort));
// //     console.log(original.split('').sort);
// // };
// // isAnagram('cat', 'tac');

// // let ca = 'Buckethead';
// // console.log(ca.split('').sort().join(''));
// // let aa = 'DeathCubeK';
// // console.log(aa.split('').sort().join(''));
// // console.log()




// // return test.split('').sort().join('') === original.split('').sort().join('');











// ????????????????????????
// ????????????????????????
// ????????????????????????

// function mygcd(x, y) {
// while (x || y) {
    
//   if ( x  > y ) {
//     if ( x % y === 0 ) {
//       return y;
//     };
//   x = x % y;
// };

//   };
//   return ( x + y);
//   };

// mygcd(10, 8);





// function factorial(n) {
//   try {
//   let result;
  
//   while( n >= 0 && n < 12) {
//     if (n === 1 || n === 0 ) {
//       return result = 1;
//     };
//     return result = n * factorial(n - 1);
//   };
//   throw new RangeError('Number "n" out of range');
//   }
//   catch(err) {
//     console.error(err.name);
//   };

// };

// console.log( factorial(14));
// let r = [1,2,3,4,5];
// r.filter(item => )
// console.log(r[2]);

// let myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];

// function removeEveryOther(arr) {
//    return arr.filter( (_, index) => index % 2 === 0);
// };

// console.log(removeEveryOther(myArr));



// function factorial(n) {
//   let result;
  
//   while( n >= 0 && n <= 12) {
//     if (n === 1 || n === 0 ) {
//       return result = 1;
//     };
//     return result = n * factorial(n - 1);
//   };
//   if ( n < 0 || n > 12) {
//     throw new RangeError('Number "n" out of range');
// };
// };

// const arr = [1,1,2,2,3,3];
// //  [1,2,3]
// function unique(arr) 
// console.log( unique(arr));


function foo(arr) {
  const result = [];

  arr.forEach((item) => {
    if(result.includes(item)) {
      result.push(item);
    }
  });

  return result;
}


