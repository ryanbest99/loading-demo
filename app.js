console.log("Hi");

// select element - main page and result page
const mainPage = document.querySelector(".main-page");
const resultPage = document.querySelector(".result-page");
const btn = document.querySelector(".button");
const loading = document.querySelector(".loading");

// click event
btn.addEventListener("click", function () {
  console.log("Clicked");
  mainPage.classList.add("hide");
  loading.classList.remove("hide");

  setTimeout(function () {
    resultPage.classList.remove("hide");
    loading.classList.add("hide");
  }, 2000);
});
