document.addEventListener("DOMContentLoaded", () => {
  // Add js-enabled class to body to enable animations
  document.body.classList.add('js-enabled');
  
  const projectCards = document.querySelectorAll('.project-card');
  const dividers = document.querySelectorAll('.projects-section .projects-divider');

  // Observe each card individually for fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe each project card
  projectCards.forEach(card => {
    observer.observe(card);
  });

  // Observe each divider
  dividers.forEach(divider => {
    observer.observe(divider);
  });
});
