const displayConfirmation = () => {
  document.querySelector(".main_container").classList.add("blurr");
  document.querySelector(".popup_container").classList.remove("hidden");
};

document.querySelector("#save").addEventListener("click", displayConfirmation);

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
