const navigasiArtikel = document.getElementById("navigasi-artikel");

navigasiArtikel.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link-artikel")) {
    const navLink = document.querySelectorAll(".nav-link-artikel");
    navLink.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});
