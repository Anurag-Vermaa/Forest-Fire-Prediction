function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 10
    });
}

document.getElementById('prediction-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let temperature = parseFloat(document.getElementById('temperature').value);
    let humidity = parseFloat(document.getElementById('humidity').value);
    let windSpeed = parseFloat(document.getElementById('wind-speed').value);
    let fuelMoisture = parseFloat(document.getElementById('fuel-moisture').value);

    if (isNaN(temperature) || isNaN(humidity) || isNaN(windSpeed) || isNaN(fuelMoisture)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    let fireRisk = (temperature * 0.4) + (windSpeed * 0.3) - (humidity * 0.2) - (fuelMoisture * 0.1);

    alert(`Predicted Fire Risk Score: ${fireRisk.toFixed(2)}`);
});
