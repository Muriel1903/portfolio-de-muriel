const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
revealSections();