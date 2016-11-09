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
}

// Making a request
 var details = document.getElementById('details').value;
 var phone = document.getElementById('phone').value;
 var address = document.getElementById('address').value;
 var name = document.getElementById('name').value
 request.open('POST','http://adi2342.imad.hasura-app.io/store-data',true);
 request.setRequestHeader('Content-type', 'Application/JSON');
 request.send(JSON.stringify({details : details, phone : phone, address : address, name : name}));
// Sending data as post request
