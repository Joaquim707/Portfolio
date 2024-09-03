// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');


// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navlinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
//             })
//         }
//     })
// }

// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// Get references to elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Handle scroll events
window.onscroll = () => {
    let currentSectionId = '';

    // Determine which section is currently in view
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            currentSectionId = id;
        }
    });

    // Update navlinks to reflect the current section
    navlinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
}

// Handle menu icon click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
