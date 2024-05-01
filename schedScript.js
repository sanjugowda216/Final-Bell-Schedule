
//submit button nclicked
function openWindow(){
  

}

// Save user input as a key-value pair for period and their text entry into one cookie
/*
function saveUserInput(period, textEntry) {
    var userInput = {};
    
    if (document.cookie) {
        var cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            var parts = cookie.split('=');
            userInput[parts[0].trim()] = parts[1].trim();
        });
    }
    
    userInput[period] = textEntry;
    
    var cookieString = Object.keys(userInput).map(key => `${key}=${userInput[key]}`).join('; ');
    document.cookie = cookieString;
  

}
// Retrieve the cookie value for a specific key
function retrieveCookieValue(key) {
    if (document.cookie) {
        var cookies = document.cookie.split(';');
        var keyValuePairs = cookies.map(cookie => cookie.trim().split('='));
        var cookieObject = Object.fromEntries(keyValuePairs);
        
        return cookieObject[key];
    }
    return null;
}
*/

function saveCookie(){
  var first = document.getElementById("1").value;
  var second = document.getElementById("2").value;
  var third = document.getElementById("3").value;
  var fourth = document.getElementById("4").value;
  var fifth = document.getElementById("5").value;
  var sixth = document.getElementById("6").value;
  oven = {per1:first, per2:second, per3:third, per4:fourth,per5:fifth,per6:sixth}
  document.cookie = JSON.stringify(oven);
  window.open("index.html","_self");
  

}