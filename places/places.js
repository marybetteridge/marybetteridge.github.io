const data = [
    { "lat": "53.9600", "long": "-1.0873", "colour": "#00ff00", "name": "York" },
    { "lat": "53.8007", "long": "-1.5497", "colour": "#00ff00", "name": "Leeds" },
    { "lat": "53.7945", "long": "-1.7494", "colour": "#00ff00", "name": "Bradford" },
    { "lat": "53.7676", "long": "-0.3274", "colour": "#00ff00", "name": "Hull" },
    { "lat": "54.2831", "long": "-0.3997", "colour": "#00ff00", "name": "Scarbrough" },
    { "lat": "54.4886", "long": "-0.6133", "colour": "#00ff00", "name": "Whitby" },
    { "lat": "54.5208", "long": "-1.2197", "colour": "#00ff00", "name": "Middlesbrough" },
    { "lat": "54.9782", "long": "-1.6177", "colour": "#00ff00", "name": "Newcastle" },
    { "lat": "55.9532", "long": "-3.1882", "colour": "#0000ff", "name": "Edinburgh" },
    { "lat": "55.8446", "long": "-4.2403", "colour": "#0000ff", "name": "Glasgow" },
    { "lat": "51.5072", "long": "-0.1276", "colour": "#00ff00", "name": "London" },
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
            title: place.name,
            subTitle: '',
            text: '',
            color: place.colour
        });

        map.entities.push(pin);
    });
}


loadMapScenario()