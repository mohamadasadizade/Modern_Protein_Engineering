const toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
if (toggle && sidebar) {
  toggle.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
document.querySelectorAll(".side-link").forEach(link => {
  if (link.href === window.location.href || link.href === window.location.href.split("#")[0] && !window.location.hash) {
    link.classList.add("active");
  }
});