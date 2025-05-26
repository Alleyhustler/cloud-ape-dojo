
// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  // Get the DVD image element
  const dvd = document.getElementById('dvd');

  // Initial position and speed
  let x = Math.random() * (window.innerWidth - dvd.width);
  let y = Math.random() * (window.innerHeight - dvd.height);
  let dx = 3.5 + -Math.abs(Math.random() * 3);
  let dy = 3.5 + -Math.abs(Math.random() * 3);
  
  // Randomize initial direction
  if (Math.random() > 0.5) dx *= -1;
  if (Math.random() > 0.5) dy *= -1;
  
  // Set the initial position of the dvd image
  dvd.style.left = x + 'px';
  dvd.style.top = y + 'px';

  function animate() {
    x += dx;
    y += dy;
    
    // Bounce off the walls (right/left)
    if (x <= 0 || x + dvd.width >= window.innerWidth) {
      dx *= -1;
    }
    
    // Bounce off the top and bottom walls
    if (y <= 0 || y + dvd.height >= window.innerHeight) {
      dy *= -1;
    }
    
    dvd.style.left = x + 'px';
    dvd.style.top = y + 'px';
    
    requestAnimationFrame(animate);
  }
  
  // Adjust on window resize
  window.addEventListener('resize', () => {
    if (x + dvd.width > window.innerWidth) {
      x = window.innerWidth - dvd.width;
    }
    if (y + dvd.height > window.innerHeight) {
      y = window.innerHeight - dvd.height;
    }
  });

  // Start the animation loop
  animate();
});
