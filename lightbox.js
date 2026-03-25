const images = document.querySelectorAll('.screenshot-row img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {

    const openImage = (e) => {
        e.preventDefault(); // 🚫 verhindert Long-Press Menü
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
    };

    img.addEventListener('click', openImage);
    img.addEventListener('touchstart', openImage); // 📱 wichtig für Mobile
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
