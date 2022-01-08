// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
task1Block = document.createElement("div")
task1Block.classList.add('wrap','collapse','alpha','beta')
task1Block.style = 'background-color : red;color : blue;font-size:20px'
task1Block.innerText = 'fqf'
document.body.append(task1Block)
document.body.append(task1Block.cloneNode(true))
// - Є масив:
let arr  = ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menu = document.getElementsByClassName('menu')
console.log(menu)
for(i=0;i<menu.length;i++){
    for (const element of arr) {
        let menuElem = document.createElement('li')
        menuElem.innerText = `${element}`
        menu[i].appendChild(menuElem)
    }
}
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    divCourse = document.createElement('div')
    divCourse.innerText = `Title : ${course.title} Duration : ${course.monthDuration}`
    document.body.appendChild(divCourse)
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const course1 of coursesAndDurationArray) {
    
divCourse = document.createElement('div')
divCourse.classList = 'item'
divHeading = document.createElement('h1')
divHeading.classList = 'heading'
divDescr = document.createElement('p')
divDescr.classList = 'description'


divHeading.innerText = `${course1.title}`
divDescr.innerText = `Durating : ${course1.monthDuration}`

document.body.append(divCourse)
divCourse.appendChild(divHeading)
divCourse.appendChild(divDescr)
}
