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
  document.querySelector(".sidebar_container").classList.toggle("hideMenu");

  document.querySelector(".content_container").style.width = "100%";
};

document.querySelector("#menu").addEventListener("click", collapseMenu);
