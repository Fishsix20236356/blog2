// Enhanced particles.js configuration with more dynamic effects
document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#ffffff", "#3498db", "#9b59b6", "#2ecc71"] // Multiple colors for particles
      },
      "shape": {
        "type": ["circle", "triangle", "polygon"], // Multiple shapes
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 6
        }
      },
      "opacity": {
        "value": 0.6,
        "random": true, // Random opacity for more dynamic feel
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": true, // Animate size
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00F",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true, // Random movement direction
        "straight": false,
        "out_mode": "bounce", // Bounce at edges instead of disappearing
        "bounce": true,
        "attract": {
          "enable": true, // Enable attraction between particles
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble" // Push particles away on hover
        },
        "onclick": {
          "enable": true,
          "mode": "push" // Add particles on click
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 300,
          "size": 20,
          "duration": 10,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});