var lightbox = document.getElementById('lightbox');

var lightboxImg = document.getElementById('lightbox-img');
var images = document.querySelectorAll('.grid-container img');
var currentIndex = 0;

function openLightbox(index) {
    lightbox.style.display = "block";
    lightboxImg.src = images[index].src;
    currentIndex = index;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox(currentIndex);
}
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox(currentIndex);
}

images.forEach((img, index) => {
    img.onclick = function() {
        openLightbox(index);
    }
});
var close = document.getElementsByClassName('close')[0];
close.onclick = closeLightbox;

window.onclick = function(event) {
    if (event.target == lightbox) {
        closeLightbox();
    }
}
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.next').onclick = showNext;
