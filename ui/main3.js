var element = document.getElementById('submit-button');

element.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readystate === XMLHttpRequest.DONE) {
            if(request.status === 200)
            console.log('Posted successfully');
            else(request.status === 500)
            console.log('Something went wrong with the server');
        }
    }

// Making a request
 var details = document.getElementById('details').value;
 var phone = document.getElementById('phone').value;
 var address = document.getElementById('address').value;
 var name = document.getElementById('name').value;
 request.open('GET','http://adi2342.imad.hasura-app.io/create-help?name='+name +'&phone=' + phone +'&address=' +address + "&details=" +details,true);
 request.send(null);

}
