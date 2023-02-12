function getUserData() {
  const FORM = document.querySelector("form");
  const FNAME = document.getElementById("fname");
  const LNAME = document.getElementById("lname");
  const ABOUT_ME = document.getElementById("about");
  const LOCATION_DATA = document.getElementById("location__data");
  const LANGUAGES_DATA = document.getElementById("languages__data");


  FORM.addEventListener("submit", (event) => {
    event.preventDefault();
    const FIRST_NAME = FNAME.value;
    const LAST_NAME = LNAME.value;
    const ABOUT = ABOUT_ME.value;
    const LOC_DATA = LOCATION_DATA.value;
    const LANG_DATA = LANGUAGES_DATA.value;

    const dataUser = {
      First_Name: FIRST_NAME,
      Last_Name: LAST_NAME,
      About_me: ABOUT,
      Location: LOC_DATA,
      Laguages: LANG_DATA,

    }
    return dataUser
  });
  console.log(dataUser)
}