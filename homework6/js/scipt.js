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
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'       
let toCapital = () => {
    let newArr = []
    for(i = 0 ;i < arrTask1.length;i++){
        let res = arrTask1[i].toUpperCase()// toLowerCase()
        newArr.push(res)
    }
    console.log(newArr)
    
}
toCapital(arrTask1)


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   '
clearArr = []
for(i = 0 ; i < str1.length;i++){
    if(str1[i] != " "){
        clearArr.push(str1[i])
        
    }
    
}
console.log(clearArr.join(''))


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let stringToarray = () => {
    for(i = 0;i<str.length;i++){
        arr = str.split(" ")
    }
}
stringToarray(str)
console.log(arr)
document.writeln(arr)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str,length) => {
    arr = []
    for(i = 0 ; i < str.length;i++){
        arr[i] = str.charAt(i)
    }
    arr.splice(length,arr.length - length)
    console.log(arr)
}
delete_characters(str,7)



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка
//  необхідно перевести у верхній регістр.
   let str12 = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let  insert_dash = () =>{
        let res = str12.toUpperCase().split(' ').join('-')
        console.log(res)
}
insert_dash(str12)
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let updown = 'grgwfwefwefwefwefwef'
let upDown = () =>{
    
    let res = updown[0].toUpperCase() + updown.slice(1)
    console.log(res)
 
}
upDown(updown)

