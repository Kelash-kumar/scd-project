// Select the hamburger icon, nav-list, open icon, and close icon
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const menuIcon = document.querySelector('[name="menu-outline"]');
const closeIcon = document.querySelector('[name="close-outline"]');


// Function to close the navbar menu
function closeNavbarMenu() {
    navList.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}

// Add event listener to the hamburger icon
hamburger.addEventListener('click', function() {
  // Toggle the 'active' class on the nav-list
  navList.classList.toggle('active');
  
  // Toggle between showing menu icon and close icon
  if (menuIcon.style.display === 'none') {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
});

// Add event listener to document to close navbar menu when clicking outside navbar
document.addEventListener('click', function(event) {
    const isClickInsideNavbar = navbar.contains(event.target);
    if (!isClickInsideNavbar) {
      closeNavbarMenu();
    }
});


const cards = document.querySelectorAll('.course_card');
const iconCard = document.querySelectorAll('.courses__container_icon ');
const icon = document.querySelectorAll('.courses__container_icon i');
const colors = ['#8e56ff', '#4582ff', '#1ab69d', '#ada729', '#ff7f46', '#ff5b5c'];

cards.forEach((card, index) => {
    // left border color
    card.style.borderLeft = `5px solid ${colors[index]}`;
    iconCard[index].style.backgroundColor = colors[index];
    
    // on hover change icon color
    card.addEventListener('mouseover', () => {
             
        iconCard[index].style.backgroundColor = 'white';
        icon[index].style.color = colors[index];
    });
    card.addEventListener('mouseout', () => {
        iconCard[index].style.backgroundColor = colors[index];
        icon[index].style.color = 'white';
    });
});
 



