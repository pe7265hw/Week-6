// creates variable for canvas id and sets chart context to '2d'
let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

//creates new Chart object
let chart = new Chart(context, {
    type: 'bar', //sets to bar
    data: {
        labels: ['Coke', 'Pepsi', 'Dr.Pepper', 'Either', 'Neither'], //label for each bar
        datasets: [{
            label: 'Number of votes', //label for y-axis
            data: [15,8, 6, 13,18], //data for the chart
            backgroundColor: ['red', 'blue', 'maroon', 'green', 'yellow'] //colors of each bar
        }]
    
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true //sets the chart y-axis to begin at zero
                }
            }]
        }
    }
});