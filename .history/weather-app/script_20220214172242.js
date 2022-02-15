function aFunction(event){
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
  };
    