// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id,name,surname,email,phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
let user1 = new User(1,'ivan','pop,qwe@fqfq',4124124)
let user2 = new User(23,'petro','pop,qwe@fqfq',4124124)
let user3 = new User(32,'ira','pop,qwe@fqfq',4124124)
let user4 = new User(42,'anya','pop,qwe@fqfq',4124124)
let user5 = new User(545,'katya','pop,qwe@fqfq',4124124)
let user6 = new User(66,'ivan','pop,qwe@fqfq',4124124)
let user7 = new User(71,'ivan','pop,qwe@fqfq',4124124)
let user8 = new User(82,'ivan','pop,qwe@fqfq',4124124)
let user9 = new User(93,'ivan','pop,qwe@fqfq',4124124)
let user10 = new User(1022,'ivan','pop,qwe@fqfq',4124124)
console.log(user1)
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let newArr = []
newArr.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
console.log(newArr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let sortedArrPar = []
let sortUserPar = () =>{
    for(i = 0;i < newArr.length;i++){
        if(newArr[i].id%2==0){
            sortedArrPar.push(newArr[i])
        }
    }
    console.log(sortedArrPar)
}
sortUserPar(newArr)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(newArr.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
    constructor(id,name,surname,email,phone,order){
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientArr = [
    new Client(1,"MASHA",'FQF','@FFQF',12424,['ps','23',22,124]),
    new Client(2,"MASHA",'FQF','@FFQF',12424,['ps','23',22,21124]),
    new Client(3,"MASHA",'FQF','@FFQF',12424,['ps',]),
    new Client(4,"MASHA",'FQF','@FFQF',12424,['ps','23',22,124,124124124,21412,124124]),
    new Client(5,"MASHA",'FQF','@FFQF',12424,['ps','23',22,124,214]),
    new Client(6,"MASHA",'FQF','@FFQF',12424,['ps','23',22,124,124,12412]),
    new Client(7,"MASHA",'FQF','@FFQF',12424,['ps','23',22,124,123]),
    new Client(8,"MASHA",'FQF','@FFQF',12424,['ps',]),
    new Client(9,"MASHA",'FQF','@FFQF',12424,['ps','23',]),
    new Client(10,"MASHA",'FQF','@FFQF',12424,['ps','23',22,2141]),
]
console.log(clientArr)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientArr.sort((a,b) => a.order.length - b.order.length))