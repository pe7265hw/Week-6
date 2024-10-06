/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


// creates empty chart object
    let expenseChart = new Chart(ctx,{
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [],
                    backgroundColor: []
                }
            ],
            labels: []
        },
        options: {}
    })

    //array of colors which will be used in chart
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]

//function which reads input and adds it to the chart object and assigns a color
function addExpenseToChart(name, amount) {
        expenseChart.data.labels.push(name)
        expenseChart.data.datasets[0].data.push(amount)

        let colorCount= expenseChart.data.datasets[0].backgroundColor.length
        let color = chartColors[colorCount % chartColors.length]

        expenseChart.data.datasets[0].backgroundColor.push(color)

        expenseChart.update()

}

//event listener for add button which validates data
addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value 
    let expenseAmount = expenseAmountInput.value 

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart 
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // calls function to update chart
    addExpenseToChart(expenseName, expenseAmount)

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})


// event listener which allows the user to press the enter key to input new data

window.addEventListener('keyup', function(){
    if (event.keyCode === 13){
        let inputElements = [expenseNameInput, expenseAmountInput, addExpenseButton]
        if (inputElements.includes(document.activeElement)){
            addExpenseButton.click()
            expenseNameInput.focus()
        }
    }
})