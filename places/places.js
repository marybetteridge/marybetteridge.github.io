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
    { "lat": "51.7520", "long": "-1.2577", "colour": "#00ff00", "name": "Oxford" },
    { "lat": "50.7184", "long": "-3.5338", "colour": "#00ff00", "name": "Exeter" },
    { "lat": "50.6199", "long": "-3.4137", "colour": "#00ff00", "name": "Exmouth" },
    { "lat": "53.4083", "long": "-2.99157", "colour": "#00ff00", "name": "Liverpool" },
    { "lat": "54.5699", "long": "-0.90011", "colour": "#00ff00", "name": "Skinningrove" },
    { "lat": "54.2100", "long": "-0.2905", "colour": "#00ff00", "name": "Filey" },
    { "lat": "54.0853", "long": "-0.1988", "colour": "#00ff00", "name": "Bridlington" },
    { "lat": "54.4343", "long": "-0.5350", "colour": "#00ff00", "name": "Robin Hoods Bay" },
    { "lat": "54.4863", "long": "-0.6133", "colour": "#00ff00", "name": "Whitby" },
    { "lat": "54.5564", "long": "-0.7954", "colour": "#00ff00", "name": "Staithes" },
    { "lat": "54.5345", "long": "-0.7551", "colour": "#00ff00", "name": "Runswick Bay" },
    { "lat": "54.5030", "long": "-0.6712", "colour": "#00ff00", "name": "Sandsend" },
    { "lat": "54.5815", "long": "-0.9751", "colour": "#00ff00", "name": "Saltburn-by-the-sea" },
    { "lat": "50.6845", "long": "-3.4666", "colour": "#00ff00", "name": "Topsham" },

    { "lat": "53.3785", "long": "-6.0570", "colour": "#ff0000", "name": "Howth" },
    { "lat": "53.3498", "long": "-6.2603", "colour": "#ff0000", "name": "Dublin" },
    { "lat": "53.1491", "long": "-6.0793", "colour": "#ff0000", "name": "Greystones" },
    { "lat": "53.2009", "long": "-6.1110", "colour": "#ff0000", "name": "Bray" },
    { "lat": "53.3895", "long": "-6.1103", "colour": "#ff0000", "name": "Sutton" },

    { "lat": "52.0406", "long": "-0.7594", "colour": "#00ff00", "name": "Milton Keynes" },
    { "lat": "51.1278", "long": "1.13134", "colour": "#00ff00", "name": "Dover" },
    { "lat": "51.4123", "long": "-0.3000", "colour": "#00ff00", "name": "Kingston Upon Thames" },
    { "lat": "51.5954", "long": "-0.1305", "colour": "#00ff00", "name": "Alexandra Palace" },
    { "lat": "51.4933", "long": "-0.0098", "colour": "#00ff00", "name": "Greenwich" },
    { "lat": "51.5505", "long": "-0.3048", "colour": "#00ff00", "name": "Wembley" },
    { "lat": "51.5054", "long": "-0.0235", "colour": "#00ff00", "name": "Canary Wharf" },
    { "lat": "51.5071", "long": "0.03053", "colour": "#00ff00", "name": "Custom House for Excel" },
    { "lat": "53.2306", "long": "-0.5405", "colour": "#00ff00", "name": "Lincoln" },
    { "lat": "54.7752", "long": "-1.5848", "colour": "#00ff00", "name": "Durham" },
    { "lat": "53.4807", "long": "-2.2426", "colour": "#00ff00", "name": "Manchester" },
    { "lat": "54.2036", "long": "-0.8059", "colour": "#00ff00", "name": "Kirby Misperton" },
    { "lat": "54.0389", "long": "-0.7146", "colour": "#00ff00", "name": "Thixendale" },
    { "lat": "54.1994", "long": "-1.1097", "colour": "#00ff00", "name": "Ampleforth" },
    { "lat": "54.3062", "long": "-0.5996", "colour": "#00ff00", "name": "Dalby Forest" },

    { "lat": "43.0914", "long": "-0.0457", "colour": "#000000", "name": "Lourdes" },
    { "lat": "48.8653", "long": "2.35664", "colour": "#000000", "name": "Paris" },
    { "lat": "49.1920", "long": "2.46871", "colour": "#000000", "name": "Chantilly" },
    { "lat": "49.4427", "long": "2.06829", "colour": "#000000", "name": "Beauvais" },
    { "lat": "49.4822", "long": "1.71340", "colour": "#000000", "name": "Gournay-en-Bray" },
    { "lat": "49.9235", "long": "1.07419", "colour": "#000000", "name": "Dieppe" },

    { "lat": "54.0960", "long": "-0.6208", "colour": "#00ff00", "name": "Kirby Grindalythe" },
    { "lat": "50.8089", "long": "-0.4425", "colour": "#00ff00", "name": "Ferring" },
    { "lat": "53.8175", "long": "-3.0356", "colour": "#00ff00", "name": "Blackpool" },
    { "lat": "52.9547", "long": "-1.1581", "colour": "#00ff00", "name": "Nottingham" },
    { "lat": "53.9270", "long": "-1.3848", "colour": "#00ff00", "name": "Wetherby" },
    { "lat": "53.9921", "long": "-1.5418", "colour": "#00ff00", "name": "Harrogate" },
    { "lat": "54.6012", "long": "-3.1347", "colour": "#00ff00", "name": "Keswick" },
    { "lat": "53.3672", "long": "-1.8157", "colour": "#00ff00", "name": "Edale" },
    { "lat": "53.5997", "long": "-1.9730", "colour": "#00ff00", "name": "Marsden" },
    { "lat": "53.7433", "long": "-2.0130", "colour": "#00ff00", "name": "Hebden Bridge" },
    { "lat": "54.1033", "long": "-1.1107", "colour": "#00ff00", "name": "Stillington" },
    { "lat": "54.1368", "long": "-0.7978", "colour": "#00ff00", "name": "Malton" },
    { "lat": "54.3685", "long": "-1.2993", "colour": "#00ff00", "name": "Osmotherley" },
    { "lat": "53.9301", "long": "-0.7794", "colour": "#00ff00", "name": "Pocklington" },
    { "lat": "54.2338", "long": "-1.3413", "colour": "#00ff00", "name": "Thirsk" },
    { "lat": "53.8835", "long": "-1.2609", "colour": "#00ff00", "name": "Tadcaster" },
    { "lat": "53.8251", "long": "-1.2211", "colour": "#00ff00", "name": "Church Fenton" },
    { "lat": "54.0110", "long": "-1.4710", "colour": "#00ff00", "name": "Knaresborugh" },
    { "lat": "54.1361", "long": "-1.5238", "colour": "#00ff00", "name": "Ripon" },
    { "lat": "54.2083", "long": "-1.2155", "colour": "#00ff00", "name": "Kilburn" },
    { "lat": "54.1443", "long": "-2.2927", "colour": "#00ff00", "name": "Horton In Ribblesdale" },
    { "lat": "54.2128", "long": "-2.3466", "colour": "#00ff00", "name": "Ribblehead" },
    { "lat": "54.3149", "long": "-2.0811", "colour": "#00ff00", "name": "Askrigg" },
    { "lat": "54.0793", "long": "-1.7617", "colour": "#00ff00", "name": "Bewerley" },
    { "lat": "53.1933", "long": "-2.8931", "colour": "#00ff00", "name": "Chester" },
    { "lat": "53.5228", "long": "-1.1284", "colour": "#00ff00", "name": "Doncaster" },
    { "lat": "54.1237", "long": "-0.9148", "colour": "#00ff00", "name": "Castle Howard" },
    { "lat": "53.8973", "long": "-1.5269", "colour": "#00ff00", "name": "Harewood House" },
    { "lat": "53.8189", "long": "-1.3192", "colour": "#00ff00", "name": "Lotherton Hall" },
    { "lat": "54.1027", "long": "-1.1107", "colour": "#00ff00", "name": "Stillington" },
    { "lat": "54.4752", "long": "-1.0616", "colour": "#00ff00", "name": "Kildale" },
    { "lat": "52.642317", "long": "-1.688376", "colour": "#00ff00", "name": "Tamworth" },
    { "lat": "52.664985", "long": "-1.772086", "colour": "#00ff00", "name": "Lichfield" },
    { "lat": "54.061992", "long": "-2.1533268", "colour": "#00ff00", "name": "Malham" },
    { "lat": "51.260438", "long": "-2.1777622", "colour": "#00ff00", "name": "Westbury" },
    { "lat": "50.792707", "long": "0.04954005", "colour": "#00ff00", "name": "Newhaven" },
    { "lat": "50.96504", "long": "0.252607", "colour": "#00ff00", "name": "Heathfield" },

    { "lat": "53.08042", "long": "-4.02564041", "colour": "#00ff00", "name": "Pen-y-Pass" },
    { "lat": "53.29416", "long": "-3.7320531", "colour": "#00ff00", "name": "Colwyn Bay" },
    { "lat": "53.2222", "long": "-4.1382568", "colour": "#00ff00", "name": "Bangor" },
    { "lat": "53.0437", "long": "-4.0360943", "colour": "#00ff00", "name": "Nant Gwynant" },

    53.04371467480868, -4.036094341395893





    

    

    
    

    









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