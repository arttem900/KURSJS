let startCalculation = document.getElementById('start'),
    budjetValue = document.querySelector('.budget-value'),
    dayBudjetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensionsValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value')

 let expensesItem = document.querySelectorAll('.expenses-item'),
     optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
     expensesItemBtn = document.querySelector('.expenses-item-btn'),
     optionalexpensesBtn = document.querySelector('.optionalexpenses-btn'),
     countBudgetBtn = document.querySelector('.count-budget-btn')

 let chooseIncomeLabel = document.querySelector('.choose-income'),
     checkSavings = document.querySelector('#savings'),
     sum = document.querySelector('#sum'),
     parcent = document.querySelector('#percent'),
     yearValue = document.querySelector('.year-value'),
     monthValue = document.querySelector('.month-value'),
     dayValue = document.querySelector('.day-value'),
     dayBudget = document.querySelector('.daybudget-value')

     let money, time;  

     expensesItemBtn.disabled = true
     optionalexpensesBtn.disabled = true
     countBudgetBtn.disabled = true

startCalculation.addEventListener('click', function () {
    money = +prompt("Ваш бюджет на месяц", '')
    time = prompt("Введите чисо в формате YYYY-MM-DD", '')

    while (isNaN(money) || money == ' ' || money == null) { // isNaN не число
        money = +prompt("Ваш бюджет на месяц", '')
    }
    appData.budget = money
    appData.timeData = time
    budjetValue.textContent = money
    yearValue.value = new Date(Date.parse(time)).getFullYear()
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1
    dayValue.value = new Date(Date.parse(time)).getDate()

    expensesItemBtn.disabled = false
    optionalexpensesBtn.disabled = false
     countBudgetBtn.disabled = false
  }
)

expensesItemBtn.addEventListener('click', function(){
    let sum = 0
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != ' ' && b != ' ' && a.length < 50) {
            appData.expenses[a] = b
            sum += +b
        } else {
            i--
        }
    }
    expensesValue.textContent = sum
    appData.opts = sum
    
})


optionalexpensesBtn.addEventListener('click', function(){
    
    let summa = 0;
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let optExpenses = +optionalexpensesItem[i].value
        if(optExpenses <= 0 || isNaN(optExpenses) ){
            optionalExpensionsValue.textContent = ''
        }else{ 
            optExpenses = +optionalexpensesItem[i].value 
            appData.optionalExpenses[i] = optExpenses 
            optionalExpensionsValue.textContent += appData.optionalExpenses[i] + " "  
            //appData.optionalExpenses[i] = (i + ': ' + optExpenses)
              summa += +optExpenses
              console.log(typeof(optExpenses));
              optionalexpensesBtn.disabled = true
        }
        
     }
     appData.opt = summa
     
  }
  
)

countBudgetBtn.addEventListener('click', function(){
    
    if(appData.budget != undefined){
    appData.moneyPerDay = ((appData.budget - appData.opt - appData.opts)/ 30).toFixed()
    dayBudget.textContent = appData.moneyPerDay

    if (appData.moneyPerDay < 1000) {
        levelValue.textContent = 'Минимальный уровень дохода';
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
        levelValue.textContent = 'Средний уровень дохода';
    } else if (appData.moneyPerDay > 5000) {
        levelValue.textContent = 'Высокий уровень дохода';
    } else {
        levelValue.textContent = 'Произошла ошибка';
    }
}else{
    dayBudget.textContent = 'Произошла ошибка'
}
})

chooseIncomeLabel.addEventListener('input', function(){
    let input = chooseIncomeLabel.value
    appData.income = input
    incomeValue.textContent = appData.income
})

checkSavings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false
    }else{appData.savings = true}
    console.log(appData.savings);
})

sum.addEventListener('input', function () {
    if (appData.savings == true) {
        let summ = sum.value,
            parcents = parcent.value

        appData.mothIncome = summ / 100 / 12 * parcents
        appData.yearIncome = summ / 100 * parcents

        monthsavingsValue.textContent = appData.mothIncome
        yearsavingsValue.textContent = appData.yearIncome
    }
})

parcent.addEventListener('input', function () {
    if (appData.savings == true) {
        let summ = sum.value,
            parcents = parcent.value

        appData.mothIncome = summ / 100 / 12 * parcents
        appData.yearIncome = summ / 100 * parcents

        monthsavingsValue.textContent = appData.mothIncome
        yearsavingsValue.textContent = appData.yearIncome
    }
})

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

  