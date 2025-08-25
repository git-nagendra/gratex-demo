// Mobile Nav Toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-bar nav");
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Submenu toggle for mobile
document.querySelectorAll(".has-submenu > a").forEach((menuLink) => {
  menuLink.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const submenu = menuLink.nextElementSibling;
      submenu.style.display =
        submenu.style.display === "flex" ? "none" : "flex";
    }
  });
});
// navbar sticky
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav-bar");
  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// card_Technology
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card_Technology');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            cards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
// counter js
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const duration = 2000; // total time (ms)
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // from 0 → 1
        const easedProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        counter.textContent = Math.floor(target * easedProgress) + " +";

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target + " +"; // exact value
        }
      };

      requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // trigger CSS animation
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  });

// Slider functionality
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

// Show slide with fade animation
function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx === i) {
      slide.classList.add("active");
    }
  });
}

// Next button
nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Prev button
prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto slide
// setInterval(() => {
//   index = (index + 1) % slides.length;
//   showSlide(index);
// }, 10000);

// Initialize first slide
showSlide(index);
