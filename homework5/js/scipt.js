// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let spryamokutnika  = (function(a,b){
    let res  = a * b;
    return res;
})(4,8);
console.log(spryamokutnika);
// - створити функцію яка обчислює та повертає площу кола
let Skola = (function(radius){
    let res = Math.PI * Math.pow(radius,2);
    return res;
})(7);
console.log(Skola);
// - створити функцію яка обчислює та повертає площу циліндру
let sCILIBDRA = (function(radius,visota){
    let res = 2 * Math.PI * radius *(radius + visota);
    return res ;
})(4,2);
console.log(sCILIBDRA);
// - створити функцію яка приймає масив та виводить кожен його елемент
let mass = [1,2,3,4]
let showMass = (mass) => {
    for(i = 0 ; i < mass.length;i++){
        console.log(mass[i]);
    }
}
showMass(mass);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraph = (txt) => document.write(`<p>${txt}</p>`);
paragraph('hello world');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulwithli1 = (txt) => document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`);
ulwithli1("kotsik");
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulwithli2 = (txt,number) =>{
    document.write(`<ul>`)
    for(i = 0 ; i < number;i++){
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`)
}
ulwithli2("good job",5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let massive = [1,2,3,4,true,'1','nazar','kotsinskyi',false,'hello',23123]
let sortArr = (arr) =>{
    document.write(`<ul>Number`)
    for(i = 0 ; i<arr.length;i++){
        if(typeof(arr[i])=== 'number'){
            document.write(`<li>${arr[i]}</li>`);
        }
    }
    document.write(`</ul>`)
    document.write(`<ul>String`)
    for(i = 0 ; i<arr.length;i++){
        if(typeof(arr[i])=== 'string'){
            document.write(`<li>${arr[i]}</li>`);
        }
    }
    document.write(`</ul>`)
    document.write(`<ul>Booleans`)
    for(i = 0 ; i<arr.length;i++){
        if(typeof(arr[i])=== 'boolean'){
            document.write(`<li>${arr[i]}</li>`);
        }
    }
    document.write(`</ul>`)
}
sortArr(massive);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
people = [
    {
        id : 1,
        name : 'Nazar',
        age : 21
    },
    {
        id : 2,
        name : 'Maxym',
        age : 23
    },
    {
        id : 3,
        name : 'Ostap',
        age : 22
    },    {
        id : 4,
        name : 'Ivan',
        age : 65
    }
]
let listPeople = (data) =>{
    for (let i = 0; i < data.length; i++) {
        document.write(`<div>
            <p>Name : ${data[i].name}</p>
            <p>Age : ${data[i].age}</p>
            <p>Id : ${data[i].id}</p>
        </div>`);
    }
}
listPeople(people);