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
start()

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chosseExpenses(){
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
}
function detectDayBudget(){
appData.moneyPerDay = (appData.budget / 30).toFixed()
alert('Ваш дневной бюджет ' + Math.round(appData.moneyPerDay));
}
detectDayBudget()


function detectLevel(){
    if (appData.moneyPerDay < 1000) {
        console.log('Минимальный уровень дохода');
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
        console.log('Средний уровень дохода');
    } else if (appData.moneyPerDay > 5000) {
        console.log('Высокий уровень дохода');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel()
function chooseOptExpenses(){
    let OptExpenses = prompt('Статья необязательных расходов?', ' ')
       appData.optionalExpenses = ('1.' + ': ' + OptExpenses)
       alert(appData.optionalExpenses)
}
chooseOptExpenses()
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений', ' '),
            percent = prompt('Под какой процент', ' ')
        appData.mothIncome = save / 100 / 12 * percent
        console.log(Math.round(appData.mothIncome))
    }
}

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
    //Циклы
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