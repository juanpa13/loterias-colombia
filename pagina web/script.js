// script.js - Interacciones básicas
// Comentarios explicativos incluidos

document.addEventListener('DOMContentLoaded', () => {
  /* Age verification */
  const ageModal = document.getElementById('age-modal');
  const confirmBtn = document.getElementById('confirm-age');
  const denyBtn = document.getElementById('deny-age');

  if (!localStorage.getItem('ageVerified')) {
    showAgeModal();
  } else {
    hideAgeModal();
  }

  confirmBtn?.addEventListener('click', () => {
    localStorage.setItem('ageVerified', 'true');
    hideAgeModal();
  });

  denyBtn?.addEventListener('click', () => {
    // Redirige fuera si es menor
    window.location.href = 'https://www.google.com';
  });

  function showAgeModal() {
    ageModal?.classList.remove('modal-hidden');
    ageModal?.setAttribute('aria-hidden', 'false');
  }

  function hideAgeModal() {
    ageModal?.classList.add('modal-hidden');
    ageModal?.setAttribute('aria-hidden', 'true');
  }

  /* Mobile menu toggle */
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');
  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    if (mainMenu) mainMenu.style.display = expanded ? 'none' : 'flex';
  });

  /* Tabs */
  const tabButtons = document.querySelectorAll('.tab');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
      btn.classList.add('active');
      const content = document.getElementById(tab);
      if (content) content.classList.add('active');
    });
  });

  /* Simple contact form handler (demo) */
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validación básica
    const nombre = document.getElementById('nombre')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const mensaje = document.getElementById('mensaje')?.value || '';
    if (!nombre || !email || !mensaje) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    // Mostrar feedback temporal
    alert('Gracias por tu mensaje. Te responderemos pronto.');
    contactForm.reset();
  });

  /* Basic accessibility improvement: enable keyboard toggles for menu links */
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') link.click();
    });
  });

  /* Example console analytics for CTA clicks (sin colecta real) */
  document.querySelectorAll('.cta').forEach(el => {
    el.addEventListener('click', () => {
      console.log('CTA clicked:', el.getAttribute('href') || el.textContent);
    });
  });

  // Otras funciones simples pueden añadirse aquí (contador, FAQ, etc.)
});