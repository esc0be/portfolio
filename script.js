// When CRT is toggled off → also reduce VHS & tear visibility even more
document.getElementById('crt-toggle').addEventListener('change', e => {
  const enabled = e.target.checked;
  document.body.classList.toggle('crt-effect', enabled);
  document.body.classList.toggle('strong-tracking', enabled && false); // we don't need strong mode anymore
  header.classList.toggle('crt-glitch-intensify', enabled);
  // Optional: add extra glitch class when CRT active
  document.querySelector('.ascii-header').classList.toggle('crt-glitch-intensify', enabled);
});
  
  // Optional: slightly fade out VHS when CRT off
  document.body.style.setProperty('--vhs-line',   enabled ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)');
  document.body.style.setProperty('--vhs-noise',  enabled ? 'rgba(220,220,255,0.12)' : 'rgba(220,220,255,0.04)');
  
function showSection(cmd) {
  // ... existing code ...

  // Add glitch flash to header on change
  const header = document.querySelector('.ascii-header');
  header.classList.add('glitch-burst');
  setTimeout(() => header.classList.remove('glitch-burst'), 600);
}