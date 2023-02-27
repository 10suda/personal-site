//Nav item click handling
const navItems = document.querySelectorAll("nav li");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
