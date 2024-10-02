let mapCenter = [45,-93]
let zoomLevel = 4

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>'    
}).addTo(bridgeMap);


let bridgeList = [
    {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: '1298.4', coordinates: [40.6066, -74.0447]},
    {name: 'Golden Gate Bridge', locaiton: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783]},
    {name: 'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', span: '1158.0', coordinates: [45.8174, -84.7278]},
    {name: 'George Washington Bridge', location: 'New York, NY and New Jersey, NJ', span:'1067.0', coordinates: [40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge', location: 'Tacoma and Kitsap, WA', span:'853.44', coordinates: [47.2690, -122.5517]}
]

bridgeList.forEach(function(bridgeObject){
    let bridgeName = bridgeObject.name
    let bridgeCoordinates = bridgeObject.coordinates
    bridgeMarker.bindPopup('Popup')
    bridgeMarker.addTo(bridgeMarker)
})