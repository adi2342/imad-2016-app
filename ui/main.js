console.log('Loaded!');
var counter = document.getElementById('counter');
var span = document.getElementByID('count');
var counter = 0;
counter.onClick = function() {
    counter = counter + 1;
    span.innerHTML = counter.toString();
}