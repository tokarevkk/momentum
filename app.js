//DOM Elements
const time = document.getElementById('time'),
   greeting = document.getElementById('greeting'),
   userName = document.getElementById('name'),
   focus = document.getElementById('focus');

// SHOW time
function showTime() {
   let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();
   
   // Set AM or PM
   const amPm = hour >= 12 ? 'PM' : 'AM';

   // Hour format
   hour = hour % 12 || 12;
   // Output time 
   time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
   setTimeout(showTime, 1000);
}

function addZero(n) {
   return (parseInt(n, 10) < 10 ? '0' : " ") + n;
}
// Change BG and greting
function setBg() {
   let today = new Date(),
   hour = today.getHours();
   if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('../img/1.jpg')";
      greeting.textContent = 'Good morning';
      document.body.style.color = 'white';
   } else if (hour < 18){
      // Afternoon
      document.body.style.backgroundImage = "url('../img/2.jpg')";
      greeting.textContent = 'Good Afnernoon';
      document.body.style.color = 'white';
   } else {
      //Evening
      document.body.style.backgroundImage = "url('../img/3.jpg')";
      greeting.textContent = 'Good Evening';
      document.body.style.color = 'white';
   }
}

// Get Name
function getName() {
   // const name = document.getElementById('name');
   if (localStorage.getItem('name') === null) {
      userName.textContent = '[Enter name]';
   } else {
      userName.textContent = localStorage.getItem('name')
   }
}

//setName
function setName(e) {
   if (e.type === 'keypress') {
      // Make shure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem('name', e.target.innerText);
         userName.blur();
      }
   } else {
      localStorage.setItem ('name', e.target.innerText);
   }
}

//Get Focus
function getFocus() {
   if (localStorage.getItem('focus') === null) {
      focus.textContent = ' [Enter Focus]';
   } else {
      focus.textContent = localStorage.getItem('focus')
   }
}

function setFocus(e) {
   if (e.type === 'keypress') {
      // Make shure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem('focus', e.target.innerText);
         focus.blur();
      }
   } else {
      localStorage.setItem ('focus', e.target.innerText);
   }
}
userName.addEventListener('keypress', setFocus);
userName.addEventListener('blur', setFocus);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// RUN
showTime();
setBg();
getName();
getFocus();
setName()
setFocus();