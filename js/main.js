function scrollToAnchor(anchorId, offset = -navbarHeight) {
    $('#navbarContent').collapse('hide');
    const anchor = document.getElementById(anchorId);
    scrollTo(0, anchor.offsetTop + offset);
}

let navbar = document.getElementById("mainNav");
let navbarHeight = navbar.offsetHeight;