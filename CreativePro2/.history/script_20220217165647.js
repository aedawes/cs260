document.getElementById('generateButton').addEventListener('click', function(event){
    event.preventDefault();
    const url = "https://x-colors.herokuapp.com/api/random?number=4";
    fetch(url)
        debugger
      .then(function(response) {
        return response.json();
    }).then(function(json) {
        var colors = "";
        colors += '<div class="grid">';
        for (let i=0; i < json.length; i++) {
            colors += '<div class="colour" style=background-color:"' + json.hex + '"></div>';
        }
        colors += '</div>';
        document.getElementById("generator").innerHTML = colors;
    });
});


