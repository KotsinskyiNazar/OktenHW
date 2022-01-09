var tovars = JSON.parse(localStorage.getItem(`tovar`))
console.log(tovars)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let main = document.getElementById('listTovar')
for (const tovar of tovars){
    let divTovar = document.createElement('div')
    let name = document.createElement('p')
    let number = document.createElement('p')
    let price = document.createElement('p')
    let btnDelTovar = document.createElement('button')
    let i = 0


    divTovar.id = `${tovar.name}`
    btnDelTovar.id = `${tovar.name}`

    btnDelTovar.innerText = 'Delete this tovar'
    name.innerText = `Name of tovar : ${tovar.name}`
    number.innerText = `Number of tovar : ${tovar.number}`
    price.innerText = `Price : ${tovar.price}`
    let item = 'tovar'

    btnDelTovar.onclick = function () {
        let id = this.id
        let newArr = []
        for(let i = 0;i< tovars.length;i++){
            if(id != tovars[i].name){
                // console.log(tovars[i])
                newArr.push(tovars[i])
                // console.log(newArr)
                localStorage.setItem(item, JSON.stringify(newArr));
            }
            
        }
        console.log(id)
        // localStorage.removeItem(`tovar`)
    }
let tovar2 = localStorage.getItem('tovar')
console.log(tovar2)
   
    main.appendChild(divTovar)
    divTovar.appendChild(name)
    divTovar.appendChild(number)
    divTovar.appendChild(price)
    divTovar.appendChild(btnDelTovar)
}

let btnDelAllTovar = document.createElement('button')
btnDelAllTovar.innerText = 'Delete all tovar'
btnDelAllTovar.onclick = () =>{
    localStorage.removeItem('tovar')
}
document.body.append(btnDelAllTovar)
