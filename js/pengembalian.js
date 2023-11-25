function togglePopup(index) {

    if(index == 1) {
        document.getElementById("extend").classList.toggle("active");
    }

    if(index == 2) {
        document.getElementById("extend").classList.remove("active");
        document.getElementById("extendconfirm").classList.toggle("active");
    }

    if(index == 3) {
        document.getElementById("return").classList.toggle("active");
    }

    if(index == 4) {
        document.getElementById("return").classList.remove("active");
        document.getElementById("onsite").classList.toggle("active");
    }

    if(index == 5) {
        document.getElementById("return").classList.remove("active");
        document.getElementById("delivery").classList.toggle("active");
    }

    if(index == 6) {
        document.getElementById("delivery").classList.remove("active");
        document.getElementById("deliveryconfirm").classList.toggle("active");
    }

    if(index == 7) {
        document.getElementById("extendconfirm").classList.remove("active");
        document.getElementById("deliveryconfirm").classList.remove("active");
        document.getElementById("review").classList.toggle("active");
    }


}




// function returnn() {
//     document.getElementById("extend").classList.remove("active");
//     document.getElementById("return").classList.toggle("active");
// }