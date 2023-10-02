// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika Menu di klik
document.querySelector("#Menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const Menu = document.querySelector("#Menu");

document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
