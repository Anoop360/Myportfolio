const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".clickable-img").forEach(img => {

img.onclick = function(){

modal.style.display = "block";
modalImg.src = this.src;

};

});

closeBtn.onclick = function(){

modal.style.display = "none";

};