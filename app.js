//DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  userName = document.getElementById("name"),
  focus = document.getElementById("focus"),
  newDate = document.getElementById("data"),
  newMonth = document.getElementById("mth");

// SHOW time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // Hour format
  hour = hour % 12 || 12;
  // Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : " ") + n;
}

//Month and Day

function showMonth() {
  let today = new Date(),
    mth = today.getMonth();
  const monthTitle = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  newMonth.innerHTML = monthTitle[mth];
}
showMonth();

function showDay() {
  let today = new Date(),
    day = today.getDate();

  newDate.innerHTML = day;
}
showDay();

// Change BG and greting
function setBg() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/1.jpg')";
    greeting.textContent = "Good morning";
    document.body.style.color = "white";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('../img/2.jpg')";
    greeting.textContent = "Good Afnernoon";
    document.body.style.color = "white";
  } else if (hour < 24) {
    //Evening
    document.body.style.backgroundImage = "url('../img/3.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  } else if (hour < 6) {
    // Night
    document.body.style.backgroundImage = "url('../img/4.jpg')";
    greeting.textContent = "Good Night";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  // const name = document.getElementById('name');
  if (localStorage.getItem("name") === null) {
    userName.textContent = "[Enter name]";
  } else {
    userName.textContent = localStorage.getItem("name");
  }
}

const handleBlur = (e, key) => {
  localStorage.setItem(key, e.target.innerText);
  const currentName = localStorage.getItem(key);
  if (currentName == null || currentName == "") {
    e.target.innerText = key ==='name' ? '[EnterName]' : '[EnterFocus]'
  }
  console.log(currentName);
};

const handleInputKeypress = (e) => {
  if (e.keyCode == 13) {
    localStorage.setItem("name", e.target.innerText);
    e.target.blur();
  }
};

//Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = " [Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

const clearInput = (e) => {
  e.target.innerHTML = "";
  // console.log(userName.innerHTML)
};

userName.addEventListener("keypress", handleInputKeypress);
userName.addEventListener("blur", (event) => handleBlur(event, "name"));
focus.addEventListener("keypress", handleInputKeypress);
focus.addEventListener("blur", (event) => handleBlur(event, "focus"));
userName.addEventListener("click", clearInput);
focus.addEventListener("click", clearInput);

// RUN
showTime();
setBg();
getName();
getFocus();
