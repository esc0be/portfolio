// Background: subtle falling ASCII rain
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const chars = '01+-*/=><[]{}()\\|esc0beTRASHANTI█▓▒░■□▢◦●○◉◯★☆♠♣♥♦';
const fontSize = 14;
const cols = Math.floor(w / fontSize) + 1;
const drops = new Array(cols).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#ffffff';
  ctx.font = fontSize + 'px VCR OSD Mono, monospace';

  for (let i = 0; i < drops.length; i++) {
    if (Math.random() > 0.975) {
      const txt = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(txt, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > h && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  requestAnimationFrame(draw);
}
draw();

function showSection(cmd) {
  // ... existing code ...

  // Add glitch flash to header on change
  const header = document.querySelector('.ascii-header');
  header.classList.add('glitch-burst');
  setTimeout(() => header.classList.remove('glitch-burst'), 600);
}

// Boot sequence typing animation
const bootEl = document.getElementById('boot-text');
const bootWin = document.getElementById('boot');

const bootLines = [
  "[VOID KERNEL] Loading anti-design modules...",
  "Memory check: corrupted (good)",
  "CRT emulation: flickering intentionally",
  "Injecting digital trash... 69%",
  "Esc0be identity verified: reject modernity",
  "ANTI-DESIGN protocol active",
  "DIGITAL TRASH firewall: disabled",
  "Booting into entropy... [OK]",
  "",
  "Welcome to the sewer.",
  "Loading portfolio window..."
];

let idx = 0;
let ch = 0;

function typeBoot() {
  if (idx < bootLines.length) {
    if (ch <= bootLines[idx].length) {
      bootEl.textContent += bootLines[idx][ch] || '';
      ch++;
      setTimeout(typeBoot, 30 + Math.random() * 35);
    } else {
      bootEl.textContent += '\n';
      idx++;
      ch = 0;
      setTimeout(typeBoot, 500);
    }
  } else {
    setTimeout(() => {
      bootWin.style.opacity = '0';
    }, 1000);
    setTimeout(() => {
      bootWin.style.display = 'none';
    }, 1800);
  }
}

typeBoot();

document.getElementById('crt-toggle').addEventListener('change', e => {
  const enabled = e.target.checked;
  document.body.classList.toggle('crt-effect', enabled);
  // Optional: add extra glitch class when CRT active
  document.querySelector('.ascii-header').classList.toggle('crt-glitch-intensify', enabled);
});

// Auto-sequence for help screen
document.addEventListener('DOMContentLoaded', () => {
  // Only run this if help is the active section on load
  if (document.getElementById('help').classList.contains('active')) {
    const bootLog = document.getElementById('boot-log');
    const commandsList = document.getElementById('commands-list');

    // Wait for typing to finish (~0.12s per line × 5 + buffer)
    setTimeout(() => {
      bootLog.classList.add('fade-out');

      // After fade-out → show commands with glitch
      setTimeout(() => {
        commandsList.style.opacity = '1';
        commandsList.classList.add('visible');
      }, 1400); // slightly after fade completes
    }, 1200); // typing duration approx
  }
});
