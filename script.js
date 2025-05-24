// script.js
const langToggle = document.getElementById('langToggle');

langToggle?.addEventListener('click', () => {
  const current = langToggle.textContent.trim();
  langToggle.textContent = current === 'EN' ? 'AR' : 'EN';
  alert(`Language switched to: ${langToggle.textContent}`);
});