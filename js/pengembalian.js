function togglePopup(index) {
    // switch (index) {
    //     case 1:
    //         document.getElementById("extend").classList.toggle("active");
    //     case 2:
    //         document.getElementById("extend").classList.remove("active");
    //         document.getElementById("return").classList.toggle("active");
    //     default:

    // }

    if(index == 1) {
        document.getElementById("extend").classList.toggle("active");
    }

    if(index == 2) {
        document.getElementById("extend").classList.remove("active");
        document.getElementById("extendconfirm").classList.toggle("active");
    }


}


// function returnn() {
//     document.getElementById("extend").classList.remove("active");
//     document.getElementById("return").classList.toggle("active");
// }