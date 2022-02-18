document.getElementById('generateButton').addEventListener('click', function(event){
    event.preventDefault();
    const url = "https://x-colors.herokuapp.com/api/random?number=4";
    fetch(url)
      .then(function(response) {
        return response.json();
    }).then(function(json) {
        var colors = "";
        colors += '<div class="grid">';
        for (let i=0; i < json.length; i++) {
            colors += '<div class="colour" style="background-color:' + json[i].hex + ';">'
            colors += '<p>' + json[i].hex + '</p>'
            colors += '</div>';
        }
        colors += '</div>';
        document.getElementById("generator").innerHTML = colors;
    });
});

document.getElementById('rbg').addEventListener('input', function(event){
    event.preventDefault();
    var url = "https://x-colors.herokuapp.com/api/rgb2hex?value=";
    url += document.getElementById('rbg').value;
    fetch(url)
      .then(function(response) {
        return response.json();
    }).then(function(json) {
        var newHex = json.hex;
        document.getElementById('hexValue').innerHTML = newHex;
    });
});

document.getElementById('hex').addEventListener('input', function(event){
    event.preventDefault();
    debugger 
    var url = "https://x-colors.herokuapp.com/api/hex2rgb?value=";
    url += document.getElementById('hex').value;
    fetch(url)
      .then(function(response) {
        return response.json();
    }).then(function(json) {
        var newRbg = json.rbg;
        document.getElementById('rbgValue').innerHTML = newRbg;
    });
});


