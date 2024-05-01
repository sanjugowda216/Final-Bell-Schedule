

// Get the current time
function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var meridiem = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM

  // Convert hours to 12-hour clock format
  hours = hours % 12 || 12; // Handle midnight (0 hour)

  // Format the time as HH:MM:SS AM/PM
  var Time = hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0') + ' ' + meridiem;

  return Time;
}

// Update the time every second
function updateTime() {
  var currentTimeElement = document.getElementById('current-time');
  currentTimeElement.textContent = getCurrentTime();
}

// Update the time initially and start the timer
updateTime();
setInterval(updateTime, 1000);

window.onload = function() {
  retrieveCookieValue()
}
function retrieveCookieValue() {
  dryingRack = document.cookie;
  dr = (JSON.parse(dryingRack))
  badglob = dr;
  for (each in dr) {
    console.log(each)
  }

}

var currentTime = new Date().getHours();
if (currentTime >= 18 && currentTime < 19) {
  document.getElementById('class').innerHTML = badglob.per5;
}

function countdown() {
  countdown = newDate("April 30, 2024 14:50:00").getTime()
  setInterval = setInterval(function() {
    rn = new Date().getTime();

    //distance between now and countdown date
    distance = countdown - rn;

    // time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //set inner html of label to the time left until countdown
    document.getElementById('countdown').innerHTML = (days + hours + minutes + seconds);

  }
    , 1000)

  countdown();
  setInterval(countdown, 1000);
} 