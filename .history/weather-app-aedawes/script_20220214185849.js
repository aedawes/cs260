function current(event){
    event.preventDefault();
    var results = "";
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=metric" + "&APPID=6a55d9d1ec3118d63593d49a27cdde80";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        results += '<h2>Weather in ' + json.name + "</h2>";
        for (let i=0; i < json.weather.length; i++) {
            results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>' + json.main.temp + " &deg;C</h2>";
        results += "<p>";
        for (let i=0; i < json.weather.length; i++) {
            results += json.weather[i].description
        if (i !== json.weather.length - 1){
            results += ", " ;
            let results = "";
            results += '<h2>Weather in ' + json.name + "</h2>";
        }
       
        for (let i=0; i < json.weather.length; i++) {
            results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>' + json.main.temp + " &deg;C</h2>"
        results += "<p>"
        for (let i=0; i < json.weather.length; i++) {
            results += json.weather[i].description
            if (i !== json.weather.length - 1){
                results += ", "
            }
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
    });
    const url3 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=metric" + "&APPID=6a55d9d1ec3118d63593d49a27cdde80";
    fetch(url3)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let radiation = "";
            for (let i=0; i < json.list.length; i++) {
                radiation += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                radiation += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                radiation += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
            }
            document.getElementById("forecastResults").innerHTML = forecast;
    });
    const url2 = "http://api.openweathermap.org/data/2.5/solar_radiation?q=" + value + ", US&units=metric" + "&APPID=6a55d9d1ec3118d63593d49a27cdde80";
    fetch(url2)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let radiation = "";
            for (let i=0; i < json.list.length; i++) {
                radiation += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                radiation += "<p>Radiation: " + json.list[i].main.temp + "</p>";
            }
            document.getElementById("radiationResults").innerHTML = radiation;
    });
};

// function forecast(){
// }