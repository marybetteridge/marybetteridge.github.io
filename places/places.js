const data = [
    { "lat": "53.9600", "long": "-1.0873", "colour": "#ff0000", "name": "Place 1" },
    { "lat": "51.5072", "long": "-0.1276", "colour": "#00ff00", "name": "Place 2" },
]

function loadMapScenario() {
    const map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        /* No need to set credentials if already passed in URL */
        center: new Microsoft.Maps.Location(53.4808, -1.2426),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 7
    });

    data.forEach(function (place) {
        var loc = new Microsoft.Maps.Location(
            place.lat,
            place.long)

        var pin = new Microsoft.Maps.Pushpin(loc, {
            title: '',
            subTitle: '',
            text: '',
            color: place.colour
        });

        map.entities.push(pin);
    });
}


loadMapScenario()