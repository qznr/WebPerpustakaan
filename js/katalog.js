// function togglePopup() {
//     document.getElementById("popup-1").classList.toggle("active");
// }

function togglePopup(index) {
    var popup = document.getElementById("popup-1");
    var image = popup.querySelector("#popup-image");
    var h1 = popup.querySelector("h1");
    var btn2 = popup.querySelector(".btn-2");

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
                btn2.textContent = "Reservation";
                btn2.style.fontSize = "35px";
                btn2.onclick = function() {
                    window.location.href = ""; // go to reservasi html
                };
            } else {
                // Reset the h1 and btn-2 text for other indices
                h1.textContent = "Buku Tersedia";
                btn2.textContent = "Pinjam";
                btn2.onclick = function() {
                    window.location.href = ""; // go to pinjam html
                };
            }
        } else {
            console.error("Invalid index:", index);
            return; // Exit the function if the index is invalid
        }
    }

    // Toggle the popup's active class
    popup.classList.toggle("active");


}


