// - створити функцію яка обчислює та повертає площу прямокутника висотою
function Spramokut(a,b){
    console.log("Площа прямокутник = : " + a * b +"m^2")
}
Spramokut(4,2)
// - створити функцію яка обчислює та повертає площу кола
function Skola(radius){
    
    s = Math.PI * Math.pow(radius,2)
    console.log("Площа кола = : " + s + "m^2")
}
Skola(7)
// - створити функцію яка обчислює та повертає площу циліндру
function Scilindr(radius,visota){
    
    s = 2 * Math.PI * radius *(radius + visota)
    console.log("Площа циліндра = : " + s +"m^2")
}
Scilindr(4,2)
// - створити функцію яка приймає масив та виводить кожен його елемент
arr = [1,2,3,4,5]
function showMass(mass){
    for(i = 0 ; i < mass.length;i++){
        console.log(mass[i])
    }
}
showMass(arr)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(txt){
    document.write(`<div>${txt}</div>`)
}
createP("hello world")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(txt){
    document.write(`<ul>
        <li>${txt}</li>
        <li>${txt}</li>
        <li>${txt}</li>
    </ul>`)
}
createUl("kotsik")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlNumbered(txt,num){
    i = 0 
    document.write(`<ul>`)
    while(i < num){
        document.write(`<li>${txt}</li>`)
        i++
    }
    document.write(`</ul>`)
}
createUlNumbered("Nazar",10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function sortElem(mass){

}
kakoytomass = [1,2,3,4,true,'1','nazar','kotsinskyi',false,'hello',23123]
function sortElem(neponyatnocho){
    document.write(`<p>mass na sort : ${kakoytomass}</p>`)
    document.write(`<ul> Number`)
    for(i = 0 ; i <neponyatnocho.length;i++){
        if(typeof(neponyatnocho[i])==='number'){
            document.write(`<li>${neponyatnocho[i]} <br> index : = ${i}</li>`) 
        }
    }
    document.write(`</ul>`)
    document.write(`<ul> String`)
    for(i = 0 ; i <neponyatnocho.length;i++){
        if(typeof(neponyatnocho[i])==='string'){
            document.write(`<li>${neponyatnocho[i]} <br> index : = ${i} </li>`) 
        }
    }
    document.write(`</ul>`)
    document.write(`<ul> Boolean`)
    for(i = 0 ; i <neponyatnocho.length;i++){
        if(typeof(neponyatnocho[i])==='boolean'){
            document.write(`<li>${neponyatnocho[i]} <br> index : = ${i}</li>`) 
        }
    }
    document.write(`</ul>`)

}
sortElem(kakoytomass)
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
function listObj(data){
    for(i = 0 ; i < data.length;i++){
        document.write(`<div>
        <p>Name : ${data[i].name}</p>
        <p>Age : ${data[i].age}</p>
        <p>Id : ${data[i].id}</p>
        </div>`)
    }
}
listObj(people)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
