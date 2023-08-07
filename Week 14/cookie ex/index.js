// //console.log(document.cookie);

// const roRadio = document.querySelector("#ro");
// const enRadio = document.querySelector("#en");

// const languageChecked = () => {
//   if (enRadio.checked === true) {
//     localStorage.setItem("enChecked", "true");
//     localStorage.setItem("roChecked", "false");
//   } else if (roRadio.checked === true) {
//     localStorage.setItem("roChecked", "true");
//     localStorage.setItem("enChecked", "false");
//   }
// };

// const enChecked = localStorage.getItem("enChecked") === "true";
// const roChecked = localStorage.getItem("roChecked") === "true";

// console.log(enChecked);
// console.log(roChecked);

// roRadio.addEventListener("change", languageChecked);
// enRadio.addEventListener("change", languageChecked);
// //languageChecked();

// if (enChecked) {
//   enRadio.checked = true;
//   roRadio.checked = false;
// }

// if (roChecked) {
//   roRadio.checked = true;
//   enRadio.checked = false;
// }

const setCookie = (name, value) => {
  document.cookie = `${name}=${value}`;
};

const getCookie = (name) => {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
};

const roRadio = document.querySelector("#ro");
const enRadio = document.querySelector("#en");

const languageChecked = () => {
  setCookie("enChecked", enRadio.checked ? "true" : "false");
  setCookie("roChecked", roRadio.checked ? "true" : "false");
};

const enChecked = getCookie("enChecked") === "true";
const roChecked = getCookie("roChecked") === "true";

roRadio.addEventListener("change", languageChecked);
enRadio.addEventListener("change", languageChecked);

enRadio.checked = enChecked;
roRadio.checked = roChecked;
