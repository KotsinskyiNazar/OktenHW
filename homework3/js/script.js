// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrNum = [1,2,3,4,5];
let strNum = ['a','b','c','d','e'];
let mixNuM = [1,2,'A','B',true];
console.log(arrNum + " " + strNum + " " + mixNuM);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArr = [];
emptyArr[0] = 1;
emptyArr[1000] = true;
console.log(emptyArr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(i = 0 ; i < 10;i++){
    document.write(`<div>Kotsinskyi Nazar</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(i = 0 ; i < 10;i++){
    document.write(`<div>Kotsinskyi ${`index` + i} Nazar</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
i = 0;
while(i < 20){
    {
        document.write(`<h1>1</h1>`);
        i++
    }
    
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;
while(i < 20)
    {
        document.write(`<h1>1 index ${i}</h1>`);
        i++;
    }
   
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNumArr = [1,2,3,4,5,6,7,9,0];
for(i= 0 ; i < arrNumArr.length;i++){
    console.log(arrNumArr[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrStrArr = ["a","b","c","d","e","g","f","h","ab","cd","dd"];
for(i = 0;i < arrStrArr.length;i++){
    console.log(arrStrArr[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let mixed = [1,2,3,true,false,true,'a','b','c','kotsik',12341241];
console.log(mixed);
for(i = 0 ; i < mixed.length;i++){
    if(typeof(mixed[i]) === 'number'){
        console.log("Number = : " +mixed[i]);
    }else if(typeof(mixed[i])==='string'){
        console.log("String = : " +mixed[i]);
    }else if(typeof(mixed[i])==='boolean'){
        console.log("Bollean = : " +mixed[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let empty = []
empty[0] = 1 ;
empty[1] = 2;
empty[2] = 3;
empty[3] = 4;
empty[4] = 5;
empty[5] = 6;
empty[6] = 7;
empty[7] = 8;
empty[8] = 9;
empty[9] = true;
for(i = 0; i < empty.length;i++){
    console.log(empty[i]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(i  = 0 ;i < 100;i++){
    console.log(i);
    document.write(`<p>Поточний крок = : ${i}</p>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(i  = 0 ;i < 100;i = i + 2){
    console.log(i);
    document.write(`<p>Поточний крок з кроком 2 = : ${i}</p>`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(i  = 0 ;i < 100;i++){
    if(i%2 === 0){
         console.log(i);
        document.write(`<p>Поточний крок парні = : ${i}</p>`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(i  = 0 ;i < 100;i++){
    if(i%2 === 1){
        console.log(i);
        document.write(`<p>Поточний крок не парні = : ${i}</p>`);
    }
}