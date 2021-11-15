// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let str1 = 'hello',str2 = 'owu',str3 = 'com', str4= 'ua',
num1 =  1, num2 = 10,num3 =  -999,num4 =  123,num5 =  3.14,num6 =  2.7,num7 =  16,
bool1 = true,bool2 = false

//   Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(str1 + " " + str2 + " " + str3 + " " + str4)
alert(num1 + " " + num2 + " " +num3 + " " +num4 + " " +num5 + " " +num6 + " " +num7)
document.write(bool1 + " " + bool2)
// - Переприсвоїти кожній змінній з завдання значення на довільне.
str1 = bool1 
console.log(str1)
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = "Nazar",middleName = "Ivanovich" , lastName = "Kotsinskyi"
let person = lastName + firstName + middleName
alert(person)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt("enter name") ,middle = prompt("enter po batkiv"),age = prompt("how old are u")
alert(`Вітаю ${name} ${""} ${middle}. Тобі ${age}  років`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(typeof(a),typeof(b),typeof(c))
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true <
//   5 ? 6 -> false >
//   5 ? 6 -> false ==
//   5 ? 6 -> false ===
//   10 ? 10 -> true ==
//   10 ? 10 -> true === 
//   10 ? 10 -> false  >
//   10 ? 10 -> false <
//   10 ? 10 -> false !=
//   123 ? '123' -> false >
//   123 ? '123' -> true !=

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); 205
//      document.write(str - a + "<br/>"); 15
//      document.write(str * "2" + "<br/>"); 40
//      document.write(str / 2 + "<br/>"); 10