// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, userName, surname, email, phone) {
//     this.id = id;
//     this.userName = userName;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// //     let users = [
//         new User(11, 'Emi', 'Lee', 'lee@gmail.com', 256678),
//         new User(26, 'Mari', 'Zean', 'mari@gmail.com', 258963),
//         new User(31, 'Ian', 'Tor', 'ian@gmail.com', 30664539002),
//         new User(42, 'Mary', 'Stewart', 'marus@gmail.com', 558712),
//         new User(54, 'Antony', 'Jay', 'ant@gmail.com', 423254),
//         new User(67, 'Peter', 'Ron', 'pet@gmail.com', 124578),
//         new User(78, 'Lily', 'Back', 'lil@gmail.com', 875421),
//         new User(89, 'John', 'Smith', 'smt@gmail.com', 235689),
//         new User(90, 'Dan', 'Dou', 'den@gmail.com', 986532),
//         new User(15, 'July', 'Sam', 'jul@gmail.com', 159753),
//     ];
  // console.log(users)


// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//     let usersPair = users.filter(user => (user.id % 2===0));
//     console.log(usersPair);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userUp = users.sort ((user1,user2) => user1.id - user2.id);
// console.log(userUp);

//     - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, clientName, surname, email, phone, order) {
//         this.id = id;
//         this.clientName = clientName;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     new Client(11, 'Emi','Lee', 'lee@gmail.com', 256678, ['cosmetic','foods']),
//     new Client(56, 'Mari', 'Zean', 'mari@gmail.com', 258963, ['vegetables']),
//     new Client(123, 'Ian', 'Tor', 'ian@gmail.com', 235896, ['butter', 'sugar']),
//     new Client(24, 'Mary', 'Stewart', 'marus@gmail.com', 558712,['fruits', 'meat']),
//     new Client(47, 'Antony', 'Jay', 'ant@gmail.com', 423254, ['eggs']),
//     new Client(10, 'Peter', 'Ron', 'pet@gmail.com', 124578, ['foods', 'plants']),
//     new Client(921, 'Lily', 'Back', 'lil@gmail.com', 875421, ['salad', 'vegetables']),
//     new Client(120, 'John', 'Smith', 'smith@gmail.com', 258974, ['fruits', 'meat']),
//     new Client(3,  'Dan', 'Dou', 'den@gmail.com', 986532, ['sweets']),
//     new Client(19, 'July', 'Sam', 'jul@gmail.com', 159753, ['cosmetic', 'blush']),
// ];
// console.log(clients);
//
// // 5. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//    let sortUp = Clients.sort(({order: order1}, {order: order2}) => order1.length - order2.length)
// console.log(sortUp);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let popelushki=[
    new Popelushka('Ann',19,35),
    new Popelushka('Jan',16,36),
    new Popelushka('July',20,34),
    new Popelushka('Dolly',21,37),
    new Popelushka('Lili',22,36),
    new Popelushka('Nelly',16,37),
    new Popelushka('Nika',20,34),
    new Popelushka('Emi',22,39),
    new Popelushka('Mari',18,38),
    new Popelushka('Angi',25,37),
    new Popelushka('Elen',24,36)
];


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.\
class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let superPrince = new Prince('Dan',30, 35);
console.log(superPrince)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let princess of popelushki) {
    if (popelushki.size === superPrince.shoe) {
        console.log( );
    }
}