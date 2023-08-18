// const displayVideo = () => {
//   document.querySelector("main").style.display = "none";
//   document.querySelector("#popup").classList.remove("hidden");
// };

// document.querySelector("#popup-button").addEventListener("click", displayVideo);
const showButton = document.getElementsById("btn");
const messageDiv = document.getElementsByClassName(".after");

function showMessage() {
  const messageDiv = document.getElementById("messageDiv");
  messageDiv.style.display = "block";
}
