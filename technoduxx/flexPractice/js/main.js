let button = document.querySelector("#save");

const displayConfirmation = () => {
  let inputName = document.querySelector("#name").value;
  let inputClass = document.querySelector("#class").value;

  if (!validateName(inputName)) {
    document.querySelector("#name").style.border = "2px solid orange";
    document.querySelector("#name").innerHTML = "enter your name";
  }

  if (!validateClass(inputClass)) {
    document.querySelector("#class").style.border = "2px solid orange";
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

  if (inputName === "") {
    alert("Please Enter your name");
    return false;
  } else if (ans) {
    alert("Name can't contain specials characters");
    return false;
  } else {
    return true;
  }
};

const validateClass = (inputClass) => {
  if (inputClass == "") {
    document.querySelector("#class").innerText = "Class cannot be left empty!";
    return false;
  } else if (inputClass < 0 || inputClass > 12) {
    document.querySelector("#class").innerText =
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
  let menuHidden = document.querySelector(".hideMenu");
  let icons = document.querySelectorAll(".fa-solid");
  let sidebar = document.querySelector(".sidebar_container");

  if (menuHidden) {
    sidebar.classList.remove("hideMenu");
    sidebar.classList.add("showMenu");
    //since we want all the icon to adapt the same thing in an if else we can't go with queryselectorAll so we have to use a for loop.
    for (let icon of icons) {
      icon.classList.remove("tooltip");
    }
  } else {
    sidebar.classList.add("hideMenu");
    sidebar.classList.remove("showMenu");
    document.querySelector(".content_container").style.width = "100%";
    // document.querySelectorAll(".fa-solid").classList.add("tooltip");
    for (let icon of icons) {
      icon.classList.add("tooltip");
    }
  }
  for (let hidden of toBeHidden) {
    hidden.classList.toggle("hide");
  }
};

document.querySelector("#menu").addEventListener("click", collapseMenu);

// (method to disable a button until all the form feilds are filled.....)
// button.disabled = true; //setting button state to disabled

// input.addEventListener("change", stateHandle);

// function stateHandle() {
//   if (document.querySelector("input").value === "") {
//     button.disabled = true; //button remains disabled
//   } else {
//     button.disabled = false; //button is enabled
//   }
// }
