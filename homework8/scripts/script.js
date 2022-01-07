// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
let txt1 = document.getElementById("content")
console.log(txt1.outerText)
//     -- отримує текст з блоку з id "rules"
let txt2 = document.getElementById("rules")
console.log(txt2.outerText)
//     -- замініть текст параграфа з id 'content' на будь-який інший
txt1.innerHTML = 'qfwf'
//     -- замініть текст параграфа з id 'rules' на будь-який інши
txt2.innerHTML = 'fefqfq21312'
//     -- змініть кожному елементу колір фону на червоний
txt1.style.backgroundColor = 'red'
txt2.style.backgroundColor = 'red'
//     -- змініть кожному елементу колір тексту на синій
txt1.style.color = 'blue'
txt2.style.color = 'blue'
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(txt2.classList)
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let rules = document.getElementsByClassName('fc_rules')
for (let i = 0; i < rules.length; i++) {
    rules[i].style.color = 'red'
}

