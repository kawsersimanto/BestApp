const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{
  navbar.classList.toggle("sticky", window.scrollY > 0);
  toggleBtn.classList.toggle("sticky", window.scrollY > 0);
});