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

        let isCeked = true,
        isClose = false,
        isPad = false;
        console.log(isCeked || isClose || isPad) //вернёт true если 1 из данных true


//Практическое задание 1


    //    let money = prompt("Ваш бюджет на месяц", '')
    //     console.log(money);

    //     let time = prompt("Введите чисо в формате YYYY-MM-DD", '')
    //     console.log(time);

          
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


// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: dfsb,
//     optionalExpenses:fdg,
//     income:[],
//     savings: false
// }

// let budget = +prompt('Какой ваш месячный доход', " "),
//     dohod = budget / 30
//     alert('Ваш дневной бюджет' + Math.round(dohod) + 'руб.')
  
// Условия
    let o = 39;
    if(o < 30){
        console.log('Неверно');
    }else if(o == 39){
        console.log('Верно');
    }else{
        console.log('error');
    }
let y = 30
    switch(y){
        case y > 40:
        console.log('Ne verno');
        break;
        case y != 30:
            console.log('Verno');
       break;
       case 30:
        console.log('----');
        break; 
        default:
            console.log('&&&&');
            break;
    }
    //Циклы
    let numes = 10
    while(numes < 20){
        console.log(numes);
        numes++
    }

    do{
        console.log(numes)
        numes++
    }while(numes < 25)
    

    for(i = 1; i < 10; i++){
        if( i == 5){
            continue
        }
        console.log(i);
    }
    for(i = 1; i < 10; i++){
        if( i == 5){
            break
        }
        console.log(i);
    }


    


    for(i = 0; i < 40; i++){
        if(i % 2 == 1){
            continue
        }
        console.log(i);
    }

    