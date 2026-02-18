const whereAmI = function(lat, lng){
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
        .then(res=> {
            if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
            return res.json();
        })
        .then(data=> {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.countryCode}`)
            return fetch(`https://restcountries.com/v3.1/name/${data.countryCode}`)
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found ${res.status}`)
            return res.json();
        })
        .then(data => {
            console.log(data[0]);
        })
        .catch(err => {
            console.error(`Error: ${err.message}`);
        })
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);