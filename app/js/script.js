// DOM Elements
const loginModal = document.getElementById('loginModal');
const openLoginModalBtn = document.getElementById('openLoginModalBtn');
const closeLogin = document.getElementById('closeLogin');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

const menuToggle = document.getElementById('menuToggle');
const gateMenuToggle = document.getElementById('gateMenuToggle');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

// Open / Close Login Modal
openLoginModalBtn?.addEventListener('click', () => {
  loginModal.classList.add('open');
  loginModal.setAttribute('aria-hidden', 'false');
  setTimeout(() => document.getElementById('username')?.focus(), 100);
});

closeLogin?.addEventListener('click', () => {
  loginModal.classList.remove('open');
  loginModal.setAttribute('aria-hidden', 'true');
});

loginModal?.addEventListener('click', e => {
  if (e.target === loginModal) closeLogin.click();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && loginModal?.classList.contains('open')) {
    closeLogin.click();
  }
});

// Demo Login validation
const LOGIN_USER = 'admin';
const LOGIN_PASS = 'doblack2025';

loginForm?.addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;

  if (user === LOGIN_USER && pass === LOGIN_PASS) {
    loginError.textContent = '';
    alert('Login berhasil. Selamat datang di DOBLACK.');
    closeLogin.click();
  } else {
    loginError.textContent = 'Username atau password salah.';
  }
});

// Mobile Nav Toggle
function toggleMenu() {
  navLinks?.classList.toggle('open');
}

menuToggle?.addEventListener('click', toggleMenu);
gateMenuToggle?.addEventListener('click', () => {
  toggleMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Close mobile nav when clicking any link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

// Dynamic Copyright Year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
