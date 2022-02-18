document.getElementById('generateButton').addEventListener('click', function(event){
    debugger
    event.preventDefault();
    var colors = "";
    const url = "https://x-colors.herokuapp.com/api/random?number=4";
    fetch(url)
      .then(function(response) {
        return response.json();
    }).then(function(json) {
        colors += '<div class="grid">';
        for (let i=0; i < json.length; i++) {
            colors += '<div class="colour" style=background-color:"' + json.hex + '"></div>';
        }
        colors += '</div>';
        document.getElementById("generator").innerHTML = colors;
    });
});


