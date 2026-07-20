// ---- ticker content -------------------------------------------------
const tickerEvents = [
  "10:42:11 detection rule promoted to prod — T1059.001",
  "09:15:03 phishing case closed — user reported, no execution",
  "14:02:47 new sigma rule drafted — T1053.005",
  "22:18:59 alert triaged — false positive, tuning applied",
  "08:31:20 incident report published — RDP brute-force",
  "16:47:02 playbook updated — ransomware containment v2",
];
const track = document.getElementById('tickerTrack');
if (track) {
  const line = tickerEvents.map(e => `<span>[<span class="hl">${e.split(' ')[0]}</span> ${e.slice(9)}]</span>`).join('');
  track.innerHTML = line + line; // duplicate for seamless loop
}

// ---- active nav link on scroll --------------------------------------
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const setActive = () => {
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 140;
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollPos) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};
document.addEventListener('scroll', setActive, { passive: true });
setActive();

// ---- mobile rail toggle ----------------------------------------------
const railToggle = document.getElementById('railToggle');
const rail = document.querySelector('.rail');
if (railToggle && rail) {
  railToggle.addEventListener('click', () => {
    const open = rail.classList.toggle('is-open');
    railToggle.setAttribute('aria-expanded', open);
  });
  navLinks.forEach(link => link.addEventListener('click', () => {
    rail.classList.remove('is-open');
    railToggle.setAttribute('aria-expanded', 'false');
  }));
}

// ---- last updated footer stamp ---------------------------------------
const lastUpdated = document.getElementById('lastUpdated');
if (lastUpdated) {
  lastUpdated.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}
