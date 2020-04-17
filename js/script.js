new ProductList(new Cart());

$(".review-slider").slick();

document.getElementById("trigger").onclick = function() {
  open()
};

function open() {
  document.getElementById("menu").classList.toggle("show");
}