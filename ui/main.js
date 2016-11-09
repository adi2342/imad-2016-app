console.log('Loaded!');
var element = document.getElementById("button");
var element2 = document.getElementById("submit-button");

window.onload = function() {
element2.onclick = function(){
    location.href = 'http://www.google.com'
}
    
element.onclick = function(){
  location.href = 'http://adi2342.imad.hasura-app.io/list-help'
}

console.log('Finished')

}