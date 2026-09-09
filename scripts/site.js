(() => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('navigation');
  function closeMenu() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu +'; }
  toggle?.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? 'Close ×' : 'Menu +'; });
  document.addEventListener('keydown', event => { if(event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); toggle.focus(); } });
  document.addEventListener('click', event => { if(menu?.classList.contains('open') && !menu.contains(event.target) && !toggle.contains(event.target)) closeMenu(); });
  matchMedia('(min-width: 901px)').addEventListener('change', e => { if(e.matches) closeMenu(); });
  for (const img of document.querySelectorAll('.image-box img')) {
    const fallback = () => { const note = document.createElement('span'); note.className='image-fallback'; note.textContent='Product image unavailable. View the manufacturer link for this model.'; img.replaceWith(note); };
    img.addEventListener('error', fallback, {once:true}); if(img.complete && img.naturalWidth===0) fallback();
  }
  document.addEventListener('click', event => {
    const link=event.target.closest('a[rel~="sponsored"]'); if(!link) return;
    const data={event:'affiliate_click', page:location.pathname, retailer:new URL(link.href).hostname, product:link.closest('.card')?.querySelector('h3')?.textContent || ''};
    window.dispatchEvent(new CustomEvent('top3choices:affiliate-click',{detail:data}));
    // Connect a consent-aware analytics provider to this event at launch.
  });
})();
