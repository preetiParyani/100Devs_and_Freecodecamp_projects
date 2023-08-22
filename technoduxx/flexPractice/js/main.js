let input = document.querySelector("input");
let button = document.querySelector("#save");

// button.disabled = true; //setting button state to disabled

// input.addEventListener("change", stateHandle);

// function stateHandle() {
//   if (document.querySelector("input").value === "") {
//     button.disabled = true; //button remains disabled
//   } else {
//     button.disabled = false; //button is enabled
//   }
// }

const displayConfirmation = () => {
  let inputName = document.querySelector("#name").value;
  let inputClass = document.forms["myForm"]["#class"].value;

  if (!validateName(inputName)) {
    document.querySelector("#name").style.border = "2px solid red";
  }

  if (!validateClass(inputClass)) {
    document.querySelector("#class").style.border = "2px solid red";
  } else {
    document.querySelector("#name").style.border = "2px solid #d2d2d2";
    document.querySelector("#class").style.border = "2px solid #d2d2d2";

    document.querySelector(".main_container").classList.add("blurr");
    document.querySelector(".popup_container").classList.remove("hidden");
  }
};
document.querySelector("#save").addEventListener("click", displayConfirmation);

const validateName = (inputName) => {
  const pattern = /[!@#$%^&*<>~`|0-9]/g;
  let ans = pattern.exec(inputName);

  if (inputName == "") {
    document.querySelector(".name").innerText = "Name cannot be left empty!";
    return false;
  } else if (ans) {
    document.querySelector(".name").innerText =
      "Name cannot have special character";
    return false;
  }
  return true;
};

const validateClass = (inputClass) => {
  if (inputClass == "") {
    document.querySelector(".class").innerText = "Class cannot be left empty!";
    return false;
  } else if (inputClass < 0 || inputClass > 12) {
    document.querySelector(".classError").innerText =
      "Please select the class between 1 to 12!";
    return false;
  }
  return true;
};

const Exit = () => {
  document.querySelector(".main_container").classList.remove("blurr");
  document.querySelector(".popup_container").classList.add("hidden");
};

document.querySelector("#close").addEventListener("click", Exit);

const collapseMenu = () => {
  let toBeHidden = document.querySelectorAll(".toBeHidden");
  if (document.querySelector(".hideMenu")) {
    document.querySelector(".sidebar_container").classList.remove("hideMenu");
    document.querySelector(".sidebar_container").classList.add("showMenu");
  } else {
    document.querySelector(".sidebar_container").classList.add("hideMenu");
    document.querySelector(".sidebar_container").classList.remove("showMenu");

    document.querySelector(".content_container").style.width = "100%";
  }
  for (let hidden of toBeHidden) {
    hidden.classList.toggle("hide");
  }
};

document.querySelector("#menu").addEventListener("click", collapseMenu);

console.log(document.querySelector("#name").value);
