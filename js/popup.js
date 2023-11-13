function togglePopup(popupId) {
    document.body.classList.add('popup-open');
    document.getElementById(popupId).style.display = 'block';
}
document.getElementById('showPopup1').addEventListener('click', function () {
    togglePopup('popupContainer1');
});
// Menutup pop-up jika pengguna mengklik di luar kontennya
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup')) {
        document.body.classList.remove('popup-open');
        event.target.style.display = 'none';
    }
});