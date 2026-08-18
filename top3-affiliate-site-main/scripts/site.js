(() => {
  const dropdown = document.querySelector('.mega-dropdown');
  if (!dropdown) return;
  const button = dropdown.querySelector('.mega-dropbtn');
  const menu = dropdown.querySelector('.mega-menu');
  if (!button || !menu) return;
  const close = () => { dropdown.classList.remove('is-open'); button.setAttribute('aria-expanded','false'); };
  button.addEventListener('click', e => {
    e.preventDefault();
    const open = !dropdown.classList.contains('is-open');
    dropdown.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', e => { if (!dropdown.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); button.focus(); } });
})();
