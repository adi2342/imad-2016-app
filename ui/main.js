console.log('Loaded!');
var element = document.getElementById("button");

window.onload = function() {
    
element.onclick = function(){
  location.href = 'http://adi2342.imad.hasura-app.io/list-help'
}

console.log('Finished')

var element2 = document.getElementById("submit-button");
element2.onclick = function(){
    location.href = 'http://www.google.com'
}
}