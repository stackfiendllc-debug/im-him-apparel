const logo = document.querySelector('.tv-logo');

logo.addEventListener('mouseover', () => {
  logo.style.transform = 'scale(1.08)';
});

logo.addEventListener('mouseout', () => {
  logo.style.transform = 'scale(1)';
});

setInterval(() => {
  logo.style.filter = Math.random() > 0.5
    ? 'drop-shadow(0 0 30px orange)'
    : 'drop-shadow(0 0 15px gold)';
}, 500);