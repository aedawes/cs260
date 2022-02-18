function current(event){
    event.preventDefault();
    var colors = "";
    const url = "https://x-colors.herokuapp.com/api/random?number=4";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        colors += '<div class="grid"><div class="grid">'
        for (let i=0; i < json.length; i++) {
            colors += '' + json.hex + '.png"/>';
        }
            + '<div class="colour One" style=background-color:"' + json.hex + '"></div>'
            + '<div class="colour Two"></div>'<
            + 'div class="colour Three"></div>'
            + '<div class="colour Four"></div>'
            + '</div>';
        document.getElementById("weatherResults").innerHTML = results;
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
    });
    const url2= "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=metric" + "&APPID=4ae7fd66dd1714e983afd778cc10187d";
    fetch(url2)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let forecast = "<div class='grid-container'>";
            forecast+="<div class = 'grid'>";
            for (let i=0; i < json.list.length; i++) {
                forecast += "<div class='grid-item'>"
                forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                forecast += "<p>Feels like: " + json.list[i].main.feels_like + "</p>";
                forecast += "<p>Visibility: " + json.list[i].visibility + "</p>";
                forecast += "</hr></div>"
            }
            forecast += "</div></div>";
            document.getElementById("forecastResults").innerHTML = forecast;
    });
};