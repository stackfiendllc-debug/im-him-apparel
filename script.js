const logo = document.querySelector('.tv-logo');

logo.addEventListener('mouseover', () => {
  logo.style.transform = 'scale(1.08)';
});

logo.addEventListener('mouseout', () => {
  logo.style.transform = 'scale(1)';
});

setInterval(() => {
  const colors = [
    'drop-shadow(0 0 25px orange)',
    'drop-shadow(0 0 25px blue)',
    'drop-shadow(0 0 25px red)',
    'drop-shadow(0 0 25px lime)'
  ];

  logo.style.filter =
    colors[Math.floor(Math.random() * colors.length)];
}, 500);