function updateColours(url) {
    document.getElementByClass('Colour One').src = url;
    document.getElementByClass('Colour Two').src = url;
    document.getElementByClass('Colour Three').src = url;
    document.getElementByClass('Colour Four').src = url;
  }
  // document.getElementById('theForm').submit();
  document.getElementById('generateButton').addEventListener('click', function(e){
  e.preventDefault();
  // get form values
//   let colourOne = document.getElementById('width').value;
//   let colourTwo = document.getElementById('height').value;
//   let colourThree = document.getElementById('grayscale').checked;
//   let colorFour = document.getElementById('blur').checked;
  
  // check if width is empty
//   if (width === "") {
//     width = "200";
//   }
//   if (height === "") {
//     height = "300";
//   }
  
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
  