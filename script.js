'use strict';

// Объект

let obj = {
    name: 'Artem',
    age: 31,
    isMarrid: false
}
console.log(obj.name + ' ' + obj.age);

// Массив

let arr = ['photo.png', 'orange.jpg', 'apple.webp']
console.log(arr[0]);

// Связь с пользователем

// let ages = confirm('Есть ли Вам 18 лет?')
// console.log(ages);
//let ages = prompt('Есть ли Вам 18 лет?', 'Да' )
//console.log(typeof(ages));
console.log(typeof(null));

// Операторы

// let ages = +prompt('Есть ли Вам 18 лет?', 'Да' ) // унарный плюс возвращает число
// console.log(typeof(ages))

let inc = 10,
    dec = 10;

    // console.log(++inc);// префиксная форма возвращает новое значение 11,9
    // console.log(--dec);

    // console.log(inc++);// посфиксная форма возвращает сначала старое значение 10,10
    // console.log(dec--);
    // console.log('2' == 2); // сравнивает по значениям (true)
    // console.log('2' === 2);// сравнивает по типу данных (false)

    // let isCeked = true,
    //     isClose = false,
    //     isPad = true
    //     console.log(isCeked && isClose && isPad); //вернёт true если все данные правдивы

        // let isCeked = true,
        // isClose = false,
        // isPad = false;
        // console.log(isCeked || isClose || isPad) //вернёт true если 1 из данных true


//Практическое задание 1


// ПРИЛОЖЕНИЕ


let money, time
function start() {
    money = +prompt("Ваш бюджет на месяц", '')
    time = prompt("Введите чисо в формате YYYY-MM-DD", '')

    while (isNaN(money) || money == ' ' || money == null) { // isNaN не число
        money = +prompt("Ваш бюджет на месяц", '')
    }
}



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chosseExpenses: function () {
        for (let i = 0; i < 1; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ' '),
                b = prompt('Во сколько обойдётся?', ' ')
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != ' ' && b != ' ' && a.length < 50) {
                appData.expenses[a] = b
                console.log(appData.expenses);
            } else {
                i--
                console.log('Error');
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed()
        alert('Ваш дневной бюджет ' + Math.round(appData.moneyPerDay));
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 1000) {
            console.log('Минимальный уровень дохода');
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
            console.log('Средний уровень дохода');
        } else if (appData.moneyPerDay > 5000) {
            console.log('Высокий уровень дохода');
        } else {
            console.log('Произошла ошибка');
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let OptExpenses = prompt('Статья необязательных расходов?', ' ')
            appData.optionalExpenses[i] = (i + ': ' + OptExpenses)
            console.log(appData.optionalExpenses[i])
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений', ' '),
                percent = prompt('Под какой процент', ' ')
            appData.mothIncome = save / 100 / 12 * percent
            console.log(Math.round(appData.mothIncome))
        }
    },
    choseIncome: function () {
        let items = prompt('Что принесёт дополнительный доход?', ' ')
        if (typeof (items) != 'string' || typeof (items) == null || items == ' ') {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split()
            appData.income.push(prompt('Может что-то ещё?', ''))
            appData.income.sort()
        }
        appData.income.forEach(function(item, i){
            alert('Дополнительный доход  ' + [i+1] + '- ' + item)
        })
    }
}
for(let key in appData){
    console.log(`Наша программа включает в себя ${key} : ${appData[key]}`);
}
appData.choseIncome()

// let i = 0
    
// while (i < 1) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ' '),
//         b = prompt('Во сколько обойдётся?', ' ')
//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != ' ' && b != ' ' && a.length < 50) {
//         appData.expenses[a] = b
//         console.log(appData.expenses);
//     }else{
//         i--
//         console.log('Error');
//     }
//     i++
// }

// let i = 0
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ' '),
//         b = prompt('Во сколько обойдётся?', ' ')
//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != ' ' && b != ' ' && a.length < 50) {
//         appData.expenses[a] = b
//         console.log(appData.expenses);
//     } else {
//         i--
//         console.log('Error');
//     }
//     i++
// } while (i < 1)


// let budget = +prompt('Какой ваш месячный доход', " "),
//     dohod = budget / 30
// alert('Ваш дневной бюджет' + Math.round(dohod) + 'руб.')

// function timeDate(){
//     let time = +prompt('Введите чисо в формате YYYY-MM-DD',' ')
//     let timePower = time
//     if(!isNaN(timePower)){
//         console.log(time);
//     }else {
//         alert('Ошибка')
//     }
//     }
// timeDate()  


// let f = prompt('Введите число',' ')
// console.log(f);
           
//console.log(+prompt('sldhg','')); 




  
// Условия
//     let o = 39;
//     if(o < 30){
//         console.log('Неверно');
//     }else if(o == 39){
//         console.log('Верно');
//     }else{
//         console.log('error');
//     }
// let y = 30
//     switch(y){
//         case y > 40:
//         console.log('Ne verno');
//         break;
//         case y != 30:
//             console.log('Verno');
//        break;
//        case 30:
//         console.log('----');
//         break; 
//         default:
//             console.log('&&&&');
//             break;
//     }

console.log(2 && 1 && null && 0 && undefiend);// && всегда запинается на false
console.log(null || 2 && 3 || 4);// || всегда запинается на true 3
    //Циклы, массивы
    // let array = [1,2,3,4,5]
    // array.forEach(function(item, i){
    //     console.log(`Номер: ${item} = ${i} индексу`);
    // })

    // let mass = prompt('sfdgfnhgm', '')

    // let split = []
    // split = mass.split('.')// переводит строку в массив
    // console.log(split);

    // let svich = ['sfwgr', 'swfdbegrghn', 'wfdebgfrh']
    // let open = svich.join('!  ')// переводит массив в строку
    // console.log(open);
    // console.log(array.shift());
    // console.log(array.pop()); 
    // console.log(array);


    // let numes = 10
    // while(numes < 20){
    //     console.log(numes);
    //     numes++
    // }

    // do{
    //     console.log(numes)
    //     numes++
    // }while(numes < 25)
    

    // for(i = 1; i < 10; i++){
    //     if( i == 5){
    //         continue
    //     }
    //     console.log(i);
    // }
    // for(i = 1; i < 10; i++){
    //     if( i == 5){
    //         break
    //     }
    //     console.log(i);
    // }

    // for(let i = 0; i < 10; i++){
    //     if(i % 2 == 1){
    //         continue
    //     }
    //     console.log(i);
    // }

    // ФУНКЦИИ

    // let num = 10
    // function displayMassege(text){
    //     console.log(text);
    //     num = 5
        
    // }
    // displayMassege(124)
    // console.log(num);
    

// function calc(a, b) {
//     return (a - b)
// }
// console.log(calc(6, 5));
// console.log(calc(14, 5));

// function colVar() {
//     let num = 50
//     return num
// }
// let first = 52 + colVar()
// console.log(first);


//Методы
// let str = 'test'
// console.log(str.length); //- свойство
// console.log(str.toLowerCase());// в нижнем регистре
// console.log(str.toUpperCase());// в верхнем регистре
// let $ = '12.2'
// console.log(parseInt($) );// переводит строку в число
// console.log(parseFloat($) );

// callback функции

// function time(){
//     setTimeout(function(){
//         console.log('Hello World')
//     },1000)
// }

// function second(){
//     console.log('Всем');
// }
// time()
// second()

// function learnJs(lang, callback){
//     console.log('Я изучаю ' + lang)
//     callback()  
// }
// learnJs('JavaScript',done)

// function done(){
//     console.log('Я прошёл 3й урок');
// }

// // ОБЪЕКТЫ

// let object = {
//     name: 'Artem',
//     surname: 'Petrov',
//     age: 31
// }

// for(let key in object){
//     console.log(`Свойство ${key} его значение ${object[key]}`); // цикл объекта
    
//}
//console.log(Object.keys(object).length);// длина объекта
// CОБЫТИЯ
  
let btn = document.querySelectorAll('button'),
    link = document.querySelector('a')

// btn.onclick = function(){
//     alert('HELLO WORLD')
// }
// btn.addEventListener('mouseenter', () => { // СОБЫТИЕ ПРИ НАВЕДЕНИИ
// alert('HELLO WORLD')
// })

btn[0].addEventListener('click', (event) => { // 
    console.log(event);
    let target = event.target
    target.style.backgroundColor = 'yellow' 
     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);// target объект на котором произошло событие
    })
link.addEventListener('click', (event) => {
    event.preventDefault()// закрывает переход по ссылке
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target)
})
btn.forEach(function (item) { // события на весь псевдомассив
    item.addEventListener('mouseleave', (event) => {
        console.log(event.type);
    })
})