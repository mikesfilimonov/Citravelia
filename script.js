// Citravelia — site behaviour

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// Contact form — this is a static site (no backend), so the form
// opens the visitor's email client with the details pre-filled.
// If Citravelia later adds a form backend (e.g. Formspree, a serverless
// function), replace this handler with a fetch() POST to that endpoint.
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in your name, email, and message.';
      return;
    }

    const subject = encodeURIComponent(`Enquiry from ${name} (${type})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:info@citravelia.com?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email client to send this enquiry…';
  });
}
