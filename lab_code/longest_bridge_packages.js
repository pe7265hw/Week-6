//map center
let mapCenter = [45,-93]
let zoomLevel = 3

//creates map object
let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

//adds tiles to the map to show world
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>'    
}).addTo(bridgeMap);

var BridgeIcon = L.Icon.extend({
    options:{
        iconSize: [50,50],
        iconAnchor:[4,8],
        popupAnchor: [-2, -50]
    }
})
var finalIcon = new BridgeIcon({
    iconUrl: "C:\\Users\\kpjma\\Desktop\\mctc\\ITEC 2560\\Week 6\\lab_code\\bridge.png"
})

// array of map item objects
let bridgeList = [
    {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: '1298.4', coordinates: [40.6066, -74.0447]},
    {name: 'Golden Gate Bridge', locaiton: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783]},
    {name: 'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', span: '1158.0', coordinates: [45.8174, -84.7278]},
    {name: 'George Washington Bridge', location: 'New York, NY and New Jersey, NJ', span:'1067.0', coordinates: [40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge', location: 'Tacoma and Kitsap, WA', span:'853.44', coordinates: [47.2690, -122.5517]}
]

//using foreach statement to add each array object to map
bridgeList.forEach(function(bridgeObject){
    let markerText = `Name: ${bridgeObject.name}<br>Location: ${bridgeObject.location}<br>Length: ${bridgeObject.span}`
    let bridgeCoordinates = bridgeObject.coordinates
    L.marker(bridgeCoordinates, {icon: finalIcon}).bindPopup(markerText).addTo(bridgeMap)
})

// creates variable for canvas id and sets chart context to '2d'
let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

//creates new bridge object
let chart = new Chart(context, {
    type: 'bar', //sets to bar
    data: {
        labels: [], //label for each bar
        datasets: [{
            label: 'Bridge length', //label for y-axis
            data: [], //data for the chart
            backgroundColor: [] //colors of each bar
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

//array of colors which will be used in chart
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]


//for each statement which loops the bridges into the graph
bridgeList.forEach(function(bridgeItem){

    chart.data.labels.push(bridgeItem.name)
    chart.data.datasets[0].data.push(bridgeItem.span)

    let colorCount= chart.data.datasets[0].backgroundColor.length
    console.log(colorCount)
    let color = chartColors[colorCount % chartColors.length]

    chart.data.datasets[0].backgroundColor.push[color]


    chart.update()
})



