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
 



