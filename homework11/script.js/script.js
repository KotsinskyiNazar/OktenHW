// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
inpName = document.createElement('input')
inpName.id = 'name'
inpAge = document.createElement('input')
inpAge.id = 'age'
inpBtn = document.createElement('button')
inpBtn.innerText = 'send'
let key = 'user'
inpBtn.onclick = function(){
    let name = document.getElementById('name')
    let age = document.getElementById('age')
    console.log(name.value + age.value)
    save(name.value,age.value)
}
let save = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge
    };
    localStorage.setItem(key, JSON.stringify(user));
};

let user = localStorage.getItem('user')
console.log(user)


document.body.append(inpName)
document.body.append(inpAge)
document.body.append(inpBtn)
// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
key = 'cars'
let btnCar = document.getElementById('btnAuto')
btnCar.onclick = function(){
    let model = document.getElementById('model')
    let type = document.getElementById('type')
    let volume = document.getElementById('volume')
    console.log(model.value + type.value + volume.value)
    saveCar(model.value,type.value,volume.value)
}
let saveCar  = (model,type,volume) =>{

    let carArr = JSON.parse(localStorage.getItem(key)) || [];
    carArr.push({model, type, volume})
    localStorage.setItem(key,JSON.stringify(carArr))
}
let cars = localStorage.getItem('cars')
console.log(cars)
