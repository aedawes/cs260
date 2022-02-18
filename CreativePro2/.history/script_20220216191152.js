function updateImage(url) {
    document.getElementById('photo').src = url;
  }
  // document.getElementById('theForm').submit();
  document.getElementById('getButton').addEventListener('click', function(e){
  e.preventDefault();
  // get form values
  let width = document.getElementById('width').value;
  let height = document.getElementById('height').value;
  let grayscale = document.getElementById('grayscale').checked;
  let blur = document.getElementById('blur').checked;
  let blurAmount = document.getElementById('blurAmount').value;
  let random = Math.floor(Math.random() * 10000);
  
  // check if width is empty
  if (width === "") {
    width = "200";
  }
  if (height === "") {
    height = "300";
  }
  
  // setup URL
  let url = "https://picsum.photos/" + width;
  if (height !== "") {
    url += "/" + height;
  }
  url += "?random=" + random;
  
  if (grayscale) {
    url += "&grayscale"
  }
  if (blur) {
    url += "&blur=" + blurAmount;
  }
  
  
  updateImage(url);
  });
  