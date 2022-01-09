// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let btnTovarAdd = document.getElementById('tovarCartBtn')
let name = document.forms.shopList.tovarName
let number = document.forms.shopList.tovarNumber
let price = document.forms.shopList.tovarPrice
let item = 'tovar'

let saveTovar = (name, number, price) => {
    let tovarArr = JSON.parse(localStorage.getItem(item )) || [];

    tovarArr.push({name, number, price})
    localStorage.setItem(item, JSON.stringify(tovarArr));
};

btnTovarAdd.onclick = () => {
    saveTovar(name.value, number.value, price.value);
}

let tovars = localStorage.getItem('tovar')


let moreInfo = document.createElement('a')
moreInfo.innerText = 'click'
moreInfo.href = `list.html`

document.body.append(moreInfo)
console.log(tovars)