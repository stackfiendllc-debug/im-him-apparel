document.querySelector('.tv-logo').addEventListener('mouseover', () => {
  document.querySelector('.tv-logo').style.transform = 'scale(1.05)';
});

document.querySelector('.tv-logo').addEventListener('mouseout', () => {
  document.querySelector('.tv-logo').style.transform = 'scale(1)';
});