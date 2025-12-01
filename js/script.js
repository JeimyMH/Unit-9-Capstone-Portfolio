let aboutHeader = document.querySelector('.about');
let portfolioHeader = document.querySelector('.portfolio');
let contactHeader = document.querySelector('.contact');
let button = document.querySelector('.btn-primary');

// About Header
aboutHeader.addEventListener('mouseover', () => aboutHeader.style.color = '#bbc085');
aboutHeader.addEventListener('mouseleave', () => aboutHeader.style.color = null);

//Portfolio Header
portfolioHeader.addEventListener('mouseover', () => portfolioHeader.style.color = '#bbc085');
portfolioHeader.addEventListener('mouseleave', () => portfolioHeader.style.color = null);

//Contact Header 
contactHeader.addEventListener('mouseover', () => contactHeader.style.color = '#bbc085');
contactHeader.addEventListener('mouseleave', () => contactHeader.style.color = null);

//button
button.addEventListener('mouseover', () => button.style.backgroundColor = '#cf916f');
button.addEventListener('mouseleave', () => button.style.color = null);
