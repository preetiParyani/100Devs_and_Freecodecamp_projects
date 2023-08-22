let closeBtn = document.querySelector("#close");
let saveBtn = document.querySelector("#save");
let popup = document.querySelector(".popup_container");
let mainContainer = document.querySelector(".main_container");
let menu = document.querySelector("#menu");
let sideBar = document.querySelector(".sidebar_container");
let rightContainer = document.querySelector(".content_container");
let sideLinks = document.querySelectorAll(".toBeHidden");

function hideLinks() {
  for (let link of sideLinks) {
    link.classList.add("hide");
  }
}

function showLinks() {
  for (let link of sideLinks) {
    link.classList.remove("hide");
  }
}

saveBtn.addEventListener("click", () => {
  mainContainer.classList.add("blur");
  popup.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
  mainContainer.classList.remove("blur");
});

menu.addEventListener("click", () => {
  if (document.querySelector(".half-width") === null) {
    sideBar.classList.add("half-width");
    sideBar.classList.remove("full-width");
    rightContainer.classList.add("full-right-width");
    hideLinks();
  } else {
    sideBar.classList.add("full-width");
    sideBar.classList.remove("half-width");
    showLinks();
  }
});
