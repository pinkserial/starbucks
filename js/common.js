const searchElement = document.querySelector(".search");
const searchInput = searchElement.querySelector("input");

searchElement.addEventListener("click", () => {
  searchInput.focus();
});

searchInput.addEventListener("focus", () => {
  searchElement.classList.add("focused");
  searchInput.setAttribute("placeholder", "통합검색");
});

searchInput.addEventListener("blur", () => {
  searchElement.classList.remove("focused");
  searchInput.removeAttribute("placeholder");
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();