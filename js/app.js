// CLOCK
const hour = document.getElementById("clock-hour");
const minutes = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-seconds");

const clock = () => {
  let date = new Date();

  let getHours = date.getHours() * 30;
  let getMinutes = date.getMinutes() * 6;
  let getSeconds = date.getSeconds() * 6;

  // We add rotation to the elements
  hour.style.transform = `rotateZ(${getHours + getMinutes / 12}deg)`;
  minutes.style.transform = `rotateZ(${getMinutes}deg)`;
  seconds.style.transform = `rotateZ(${getSeconds}deg)`;
};
setInterval(clock, 1000); // 1000 = 1s

/*==================== CLOCK & DATE TEXT ====================*/
const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textSeconds = document.getElementById("text-seconds");
const textAmPm = document.getElementById("text-ampm");
const dateDay = document.getElementById("date-day");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");

const clockText = () => {
  let date = new Date();
  let getHours = date.getHours();
  let getSeconds = date.getSeconds();
  let timeOfDay;
  let getMinutes = date.getMinutes();
  let getDay = date.getDate();
  let getMonth = date.getMonth();
  let getYear = date.getFullYear();

  // We change the hours from 24 to 12 hours and establish whether it is AM or PM
  if (getHours >= 12) {
    getHours = getHours - 12;
    timeOfDay = "PM";
  } else {
    timeOfDay = "AM";
  }

  // When it reacher "0 AM" hours will transform to "12 AM"
  if (getHours == 0) {
    getHours = 12;
  }

  // If Hours is < 10, include a zero before the number e.g (07:00)
  if (getHours < 10) {
    getHours = `0${getHours}`;
  }

  if (getSeconds < 10) {
    getSeconds = `0${getSeconds}`;
  }

  // Display The Hours (HTML)
  textHour.innerHTML = `${getHours}:`;

  // If minutes is < 10, include a zero before the number e.g (07:03)
  if (getMinutes < 10) {
    getMinutes = `0${getMinutes}`;
  }

  // Display minutes
  textMinutes.innerHTML = `${getMinutes}:`;

  // Display seconds
  textSeconds.innerHTML = getSeconds;

  // Display AM or PM.
  textAmPm.innerHTML = timeOfDay;

  // If you want to show the name of the day of the week
  // let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

  // We get the months of the year and show it
  let months = [
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

  // CURRENT DATE
  dateDay.innerHTML = getDay;

  dateMonth.innerHTML = `${months[getMonth]},`;
  dateYear.innerHTML = getYear;
};
setInterval(clockText, 1000); // 1000 = 1s

// Convert FROM LIGHT-MODE TO DARK MODE
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
