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
   
   // Set AM or PM
   const amPm = hour >= 12 ? 'PM' : 'AM';

   time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
   setTimeout(showTime, 1000);
}



function addZero(n) {
   return (parseInt(n, 10) < 10 ? '0' : " ") + n;

}

function setBg() {
   let today = new Date();
   hour = today.getHours();
   if (hour < 10) {
      // Morning
      document.body.style.backgroundImage = "url(../img/hills.jpg)";
      greeting.textContent = 'Good morning';
      document.body.sttyle.color = 'white';
   } else if (hour < 18){
      // Afternoon
      document.body.style.backgroundImage = "url(../img/hills.jpg)";
      greeting.textContent = 'Good Afnernoon';
      document.body.style.color = 'white';
   } else {
      //Evening
      document.body.style.backgroundImage = "url(../img/hills.jpg)";
      greeting.textContent = 'Good Evening';
      document.body.sttyle.color = 'white';
   }
}

// Name
function getName() {
   const name = document.getElementById('name');
   if (localStorage.getItem('name') === null) {
      name.textContent = ' [Enter name]';
   } else {
      name.textContent = localStorage.getItem('name')
   }
   console.log(name);
}

//SetName
function setName() {
   const name = document.getElementById('name');
   if (e.type === 'keypress') {
      if (e.whitch == 13 || e.keyCode == 13) {
         localStorage.setItem('name, e.target.innerText');
         name.blur();
      }
   } else {
      localStorage.setItem('name, e.target.innerText');
   }
}

//Focus
function getFocus() {
   if (localStorage.getItem('focus') === null) {
      focus.textContent = ' [Enter Focus]';
   } else {
      focus.textContent = localStorage.getItem('focus')
   }
}


const name = document.getElementById('name');
name.addEventListenner('keypress', getName);
name.addEventListenner('blur', getName);


showTime();
setBg();
getName();
getFocus();