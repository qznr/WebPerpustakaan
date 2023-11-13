// script.js
document.getElementById('showPopup').addEventListener('click', function () {
    document.getElementById('popupContainer').style.display = 'block';
});

// Menutup pop-up jika pengguna mengklik di luar kontennya
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('popupContainer')) {
        document.getElementById('popupContainer').style.display = 'none';
    }
});