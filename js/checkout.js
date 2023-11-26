function toggleDeliveryPickup() {
    var deliveryPickupTexts = document.querySelectorAll(".deliveryPickupText");
    var deliveryPickupImages = document.querySelectorAll(".deliveryPickupImage");
    var deliveryAddressTitles = document.querySelectorAll(".deliveryAddressTitle");
    var deliveryAddressContents = document.querySelectorAll(".deliveryAddressContent");

    // Check the current text and toggle
    deliveryPickupTexts.forEach(function(element) {
        if (element.innerHTML === "Delivery") {
            element.innerHTML = "Pickup";
        } else {
            element.innerHTML = "Delivery";
        }
    });

    // Update images, titles, and contents accordingly
    deliveryPickupImages.forEach(function(element) {
        if (element.src.includes("Delivery.png")) {
            element.src = "img/Onsite.png";
        } else {
            element.src = "img/Delivery.png";
        }
    });

    deliveryAddressTitles.forEach(function(element) {
        if (element.innerHTML === "Delivery ke alamat") {
            element.innerHTML = "Pickup di lokasi";
        } else {
            element.innerHTML = "Delivery ke alamat";
        }
    });

    deliveryAddressContents.forEach(function(element) {
        // Update content if needed
    });
}

var durationValue = 14; // Initial duration value

    function incrementDuration() {
        if (durationValue < 14) {
            durationValue++;
            updateDuration();
        }
    }

    function decrementDuration() {
        if (durationValue > 1) {
            durationValue--;
            updateDuration();
        }
    }

    function updateDuration() {
        var durationElements = document.querySelectorAll(".durationValue");
        durationElements.forEach(function(element) {
            element.innerHTML = durationValue + " hari";
        });
    }
