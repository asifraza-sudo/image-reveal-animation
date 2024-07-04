
const imageContainer = document.querySelector('.image-container');
const overlay = document.querySelector('.overlay');
const confetti = document.querySelector('.confetti');


imageContainer.addEventListener('mouseenter', () => {
    overlay.style.opacity = '0'; 
    
    confetti.innerHTML = ''; 
    for (let i = 0; i < 50; i++) { 
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.backgroundColor = randomColor();
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.top = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`; 
        confetti.appendChild(confettiPiece);
    }
});

imageContainer.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0.5'; 
});

function randomColor() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
    return colors[Math.floor(Math.random() * colors.length)];
}
