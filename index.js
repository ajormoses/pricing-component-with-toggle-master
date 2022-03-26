const annual = document.querySelector(".toggle-circle-annually");
const monthly = document.querySelector(".toggle-circle-monthly");
const wrap = document.querySelectorAll(".toggle-wrap");
const priceone = document.querySelector(".price-one");
const pricetwo = document.querySelector(".price-two");
const pricethree = document.querySelector(".price-three");
const basic = document.querySelector(".basic");
const prof = document.querySelector(".professional");
const master = document.querySelector(".master");

wrap.forEach((wrap) => {
  wrap.addEventListener("click", () => {
    monthly.classList.toggle("show");
    annual.classList.toggle("show");
    priceone.classList.toggle("show");
    pricetwo.classList.toggle("show");
    pricethree.classList.toggle("show");
    basic.classList.toggle("show");
    prof.classList.toggle("show");
    master.classList.toggle("show");
  });
});
