// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time  = Math.floor(Math.random()* (59 - 0) + 0 )
console.log(time)
if(time < 15){
    console.log("1/4 of hour")
}else if (time > 15 && time <30){
    console.log("2/4 of hour")
}else if(time > 30 && time < 45){
    console.log("3/4 of hour")
}else{
    console.log("4/4 hour")
}

//  - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.floor(Math.random() * (31 - 1) + 1)
console.log(day)
if(day < 10){
    console.log("1/3 of month")
}else if(day > 10 && day < 20 ){
    console.log("2/3 of moth")
}else{
    console.log("3/3 of month")
}
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = false
let ChechkTest = test === true ? console.log("Неправильно") : console.log("Вірно")


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 0
if( a != 0){
    console.log("Вірно")
}else{
    console.log("Невірно")
}
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = Math.floor(Math.random()*(10000-1) + 1 )
console.log(year)
if(year%4 == 0 ){
    console.log("Високосний рік")
}else{
    console.log("Не високосний")
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let jsCheck = prompt("Яка «офіційна» назва JavaScript?")
if(jsCheck === "ECMAScript"){
    alert("Правильно!")
}else{
    alert("Не знаєте? ECMAScript!")
}