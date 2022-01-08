// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let blockHide = document.createElement('div')
blockHide.id = 'text'
blockHide.style = 'width:100px;height:100px;background-color:red'
let btnHide = document.createElement('button')
btnHide.innerText = 'hide div'
btnHide.onclick = hideDiv


function hideDiv(){
    let hide = document.getElementById('text')
    console.log(hide)
    hide.style = 'visibility:none;'
}
document.body.append(blockHide)
document.body.append(btnHide)
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hideBtn = document.createElement('button')
hideBtn.id = 'hideBtn'
hideBtn.innerText = 'hide me'
hideBtn.onclick = hideButton

document.body.append(hideBtn)

function hideButton(){
    let hideBtn = document.getElementById('hideBtn')
    hideBtn.style = 'display:none'
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з 
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageInput = document.createElement('input')
let btnAgree = document.createElement('button')

btnAgree.innerText = "check age"

ageInput.id = 'ageCheck'
btnAgree.id = 'btnAgeCheck'

btnAgree.onclick = checkAge 

function checkAge() {
    let check = document.getElementById('ageCheck')
    if(check.value >= 18){
        alert("welcome u are older then 18 or 18")
    }else{
        alert("you are younger than 18")
    }
    console.log(check.value)
}







document.body.append(ageInput)
document.body.append(btnAgree)
// - Создайте меню, которое раскрывается/сворачивается при клике

let btnHideMenu = document.createElement('button')
btnHideMenu.innerText = 'hide menu'
 let menuElement = document.querySelector('.menu');
    btnHideMenu.onclick = function () {
        menuElement.classList.toggle('hidden');
    };
    document.body.append(btnHideMenu)

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
function Comments(title,body){
    this.title = title
    this.body = body
}
let commentsList = [
    new Comments('QFWQF','QWFQWFQWF'),
    new Comments('QFWQF2','QWFQWFQWF'),
    new Comments('QFWQF3','QWFQWFQWF'),
    new Comments('QFWQF4','QWFQWFQWF'),
]
console.log(commentsList)

let divComments = document.createElement('div')
let divComment = document.createElement('div')


for (const comment of commentsList) {
    let title = document.createElement('h5')
    let body = document.createElement('p')
    body.id = 'bodyComm'
    let btnHideComm = document.createElement('button')
    btnHideComm.innerText = 'hide comment'
    btnHideComm.onclick = function(){
        let x = document.getElementById('bodyComm')
        x.style.visibility = 'hidden'
    }

    title.innerText  = `${comment.title}`
    body.innerText = `${comment.body}`

    divComment.appendChild(title)
    divComment.appendChild(body)
    divComment.appendChild(btnHideComm)
}


document.body.append(divComments)
divComments.appendChild(divComment)

