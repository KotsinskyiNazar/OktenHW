// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
arrTask1 = ['hello worldd', 'lorem ipsum', 'javascript is cool']
let lengthWord = () => {
    for(i = 0 ;i < arrTask1.length;i++){
       console.log(arrTask1[i].length) 
    }
}
lengthWord(arrTask1)
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let toCapital = () => {
    let newArr = []
    for(i = 0 ;i < arrTask1.length;i++){
        let res = arrTask1[i].toUpperCase()
        newArr[i].push(res[i])
    }
    
}
toCapital(arrTask1)
console.log(toCapital(arrTask1))
// console.log(arrTask1[i])

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.