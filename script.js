// Envelope opening and card reveal animation
document.getElementById('openEnvelope').addEventListener('click', function() {
  document.querySelector('.envelope-flap').style.transform = 'rotateX(180deg)';
  setTimeout(function() {
      document.querySelector('.invitation-card').style.display = 'block';
  }, 1000);
});
const bubblesContainer = document.querySelector('.bubbles');
const bubbleCount = 50;

for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('span');
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    bubblesContainer.appendChild(bubble);
}
// Countdown timer
// Countdown timer
const countdown = document.getElementById('countdown');
const partyDate = new Date('2024-09-29T08:00:00').getTime();

setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = partyDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
      countdown.innerHTML = "Event Started!";
  }
}, 1000);

// Fireworks Animation
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function createParticle() {
  const particle = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 4 + 1,
      speedX: Math.random() * 6 - 3,
      speedY: Math.random() * 6 - 3,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
  };
  particles.push(particle);
}

function updateParticles() {
  particles.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      if (particle.radius > 0.1) particle.radius -= 0.05;
      else particles.splice(index, 1);
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
  });
}

function animateFireworks() {
  createParticle();
  updateParticles();
  drawParticles();
  requestAnimationFrame(animateFireworks);
}

animateFireworks();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Registration page interaction
document.getElementById('registerButton').addEventListener('click', function() {
  window.location.href = 'register.html'; 
  // Redirect to the registration page
  
});
