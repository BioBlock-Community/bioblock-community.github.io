(() => {
  const footer = document.querySelector("[data-site-footer]");

  if (footer) {
    footer.innerHTML = `
      <div class="shell">
        <div class="footer-grid">
          <div>
            <a class="brand" href="index.html"><span>DATIpilot</span><span class="brand-mark">BioBlock</span><span>Innovationscommunity</span></a>
            <p>Secure, FAIR, and verifiable biotech data infrastructure.</p>
          </div>
          <ul class="footer-links">
            <li><a href="events.html">Events</a></li>
            <li><a href="community.html">Community</a></li>
            <li><a href="roadmap-projects.html">Roadmaps &amp; Projects</a></li>
            <li><a href="knowledge-center.html">Knowledge Center</a></li>
          </ul>
          <ul class="footer-links">
            <li><a href="call-2025.html">Open Call 2025</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="impressum.html">Impressum</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li>
              <a class="linkedin-link" href="https://www.linkedin.com/company/datipilot-bioblock/posts/?feedView=all" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 20.5h-3.6V15c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.6H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3ZM5.3 7.4A2.1 2.1 0 1 1 5.3 3a2.1 2.1 0 0 1 0 4.4Zm1.8 13.1H3.5V9h3.6v11.5Z"/></svg>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-meta">
          <span>© 2026 BioBlock. All rights reserved.</span>
          <div class="footer-funding" aria-label="Funded by DATIpilot and BMFTR">
            <span class="funding-mark datipilot"><img src="assets/funding/datipilot-logo.png" alt="DATIpilot"></span>
            <span class="funding-mark"><img src="assets/funding/bmftr-logo.jpg" alt="Federal Ministry of Research, Technology and Space"></span>
          </div>
        </div>
      </div>
    `;
  }

  const button = document.querySelector("[data-menu-button]");
  const navigation = document.querySelector("[data-navigation]");

  if (button && navigation) {
    const setOpen = (open) => {
      navigation.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    };

    button.addEventListener("click", () => {
      setOpen(!navigation.classList.contains("is-open"));
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".site-header")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.focus();
      }
    });
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-scroll-button]").forEach((scrollButton) => {
    const track = document.getElementById(scrollButton.dataset.scrollTarget);
    if (!track) return;

    scrollButton.addEventListener("click", () => {
      const direction = Number(scrollButton.dataset.scrollDirection);
      track.scrollBy({
        left: direction * Math.max(track.clientWidth * 0.8, 240),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });
})();
