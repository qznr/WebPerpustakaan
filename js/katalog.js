// function togglePopup() {
//     document.getElementById("popup-1").classList.toggle("active");
// }

var popup = document.getElementById("popup-1");
var image = popup.querySelector("#popup-image");
var h1 = popup.querySelector("h1");
var btn2 = popup.querySelector(".btn-2");
var content = popup.querySelector(".content");
var confirm = document.getElementById("confirm");

function togglePopup(index) {

    // Check if the function is called with an index parameter
    if (index !== undefined) {
        // Get all image-content elements
        var imageContents = document.querySelectorAll(".image-content");

        // Check if the index is valid
        if (index >= 0 && index < imageContents.length) {
            // Set the image source based on the clicked image index
            var imageContent = imageContents[index];
            image.src = imageContent.src;
            if (index === 6) {
                // Modify the h1 and btn-2 text
                h1.textContent = "Tidak Tersedia";
                btn2.textContent = "Reservasi";
                btn2.style.fontSize = "35px";

            } else {
                // Reset the h1 and btn-2 text for other indices
                h1.textContent = "Buku Tersedia";
                btn2.textContent = "Pinjam";
            }
        } else {
            console.error("Invalid index:", index);
            return; // Exit the function if the index is invalid
        }
    }

    // Toggle the popup's active class
    popup.classList.toggle("active");
}

function confirmPopup(){
    popup.classList.remove("active");
    confirm.classList.toggle("active");

}

window.addEventListener("scroll", function() {
    // Calculate the new top position based on the scroll position
    var newTop = window.scrollY + window.innerHeight / 1 - content.clientHeight / 2 ;

    // Set the new top position for the content
    content.style.top = newTop + "px";
});




