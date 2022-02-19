var XMLHttpRequest = require('xhr2');

function httpGetAsync(theUrl, callback) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
            callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.open("GET", theUrl, true); // true for asynchronous 
    xmlHttpReq.send(null);
}

httpGetAsync('http://localhost:8080/nEmentas?numEmentas=49', function (result) {
    console.log(result);
});




