const FORM = document.querySelector("form");
const FNAME = document.getElementById("fname");
const LNAME = document.getElementById("lname");
const ABOUT = document.getElementsById("about")

FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  const FIRST_NAME = FNAME.value;
  const LAST_NAME = LNAME.value;
  const ABOUT_ME = ABOUT.value;


  console.log(`First Name: ${FIRST_NAME}`);
  console.log(`Last Name: ${LAST_NAME}`);
  console.log(`About Me: ${ABOUT_ME}`);

  // You can send this data to your backend for processing
});