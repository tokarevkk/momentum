//DOM Elements
const time = document.getElementById('time'),
   greeting = document.getElementById('greeting'),
   name = document.getElementById('name'),
   focus = document.getElementById('focus');

// SHOW time
function showTime() {
   let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();
   
   // // Set AM or PM
   // const amPm = hour >= 12 ? 'PM' : 'AM'

   time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;
   setTimeOut(showTime, 1000);

}
showTime();
