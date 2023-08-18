const displayConfirmation = () => {
  document.querySelector(".mainContainer").classList.add("blurr");
  document.querySelector(".popup_container").classList.remove("hidden");
};

document
  .querySelector("#saveBtn")
  .addEventListener("click", displayConfirmation);

const Exit = () => {
  document.querySelector(".mainContainer").classList.remove("blurr");
  document.querySelector(".popup_container").classList.add("hidden");
};

document.querySelector("#close").addEventListener("click", Exit);

const collapseMenu = () => {
  document.querySelector(".sideBar").classList.toggle("hideMenu");

  document.querySelector("main").style.width = "100%";
};

document.querySelector("#menu").addEventListener("click", collapseMenu);
