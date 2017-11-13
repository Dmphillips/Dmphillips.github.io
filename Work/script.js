function generateHtmlButton(datetime) {
    return "<button id='" + String(datetime) + "'>" + String(datetime) + "</button>"
}




var dateRange = 5;
// Generate the buttons

$(document).ready( function () {
    
    
    var d = new Date();
    $('body').append( generateHtmlButton(d) );
    
    
});






var urlToPostTo = "http://webhook.site/31146a40-9efc-4268-b081-61796956efa3";

var employee = 'TestEmployee';
var datetime = 'test_datetime';

var json = {
    "Employee" : employee,
    "datetime" : datetime
};

/*
$.post(urlToPostTo, json, function (data) {
    console.log(data);
});
*/
