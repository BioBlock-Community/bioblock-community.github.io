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

  const heroMotif = `
    <figure class="bioblock-motif" aria-hidden="true">
      <svg viewBox="0 0 540 430" role="img" aria-label="A linear data chain branching into multiple connected chains">
        <defs>
          <linearGradient id="chain-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#9bd4b8"/>
            <stop offset="0.5" stop-color="#087c4b"/>
            <stop offset="1" stop-color="#075c3b"/>
          </linearGradient>
          <radialGradient id="network-edge-fade" gradientUnits="userSpaceOnUse" cx="270" cy="215" r="295">
            <stop offset="0" stop-color="white"/>
            <stop offset="0.58" stop-color="white"/>
            <stop offset="0.82" stop-color="white" stop-opacity="0.55"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </radialGradient>
          <mask id="network-fade">
            <rect x="-100" y="-80" width="740" height="590" fill="url(#network-edge-fade)"/>
          </mask>
          <symbol id="bio-dna" viewBox="0 0 32 32">
            <rect width="30" height="30" x="1" y="1" fill="#087c4b" rx="15"/>
            <path fill="#fff" d="M25.529 9.272a1.379 1.379 0 1 0-2.082 1.507c-.067 1.013-.369 2.246-1.26 3.324-2.512-2.866-3.572-4.035-4.063-4.509.262-.166.483-.27.63-.328a1.378 1.378 0 0 0 2.217-1.408 1.38 1.38 0 0 0-2.7.153c-1.039.441-4.584 2.404-4.055 8.518-3.883.113-5.925 1.14-6.853 1.812a1.37 1.37 0 0 0-.761-.02 1.38 1.38 0 0 0-.983 1.687 1.377 1.377 0 0 0 2.711-.316l4.059 4.26a5 5 0 0 1-.28.161 1.38 1.38 0 0 0-1.164-.221 1.38 1.38 0 0 0 .703 2.668c.574-.15.966-.644 1.02-1.203 1.899-.943 3.471-3.26 3.061-7.485 1.218-.005 2.342-.143 3.35-.408 1.51-.397 2.764-1.076 3.714-2.025 1.198-1.198 1.882-2.768 1.999-4.572a1.38 1.38 0 0 0 .737-1.595M12.93 23.538l-4.235-4.445a8 8 0 0 1 1.024-.457l3.967 3.952a4 4 0 0 1-.756.95m1.067-1.592-3.554-3.542a13.4 13.4 0 0 1 1.95-.383l2.033 1.94c-.06.79-.214 1.445-.43 1.985zm-.72-4.018q.519-.04 1.098-.054.068.627.076 1.174zm2.295-1.404a11.4 11.4 0 0 1 .012-2.458l1.985 2.328q-.939.136-1.997.13m2.766-.267-2.605-3.054a6.7 6.7 0 0 1 .56-1.563c.846.914 2.417 2.687 3.66 4.102a8.7 8.7 0 0 1-1.615.515m2.24-.826c-2.205-2.515-3.33-3.77-3.93-4.394.3-.44.625-.784.935-1.045.531.525 2.593 2.845 4.14 4.606-.335.315-.72.593-1.145.833"/>
          </symbol>
          <symbol id="bio-cell" viewBox="0 0 32 32">
            <rect width="30" height="30" x="1" y="1" fill="#087c4b" rx="15"/>
            <g fill="none" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="16" cy="16" r="9.5" stroke="#fff" stroke-width="2"/>
              <circle cx="16.5" cy="16" r="3.6" fill="#fff"/>
              <path d="M9.5 12c1.8-1.7 3.3-2.1 4.8-1.2M19.7 9.5c1.8.7 3 1.8 3.7 3.4M9.7 20c1.4 1.6 3 2.3 4.7 2.4M20.1 21.5c1.3-.8 2.2-1.8 2.7-3.2" stroke="#b9e2ce" stroke-width="1.4"/>
              <circle cx="10.5" cy="16.5" r="1" fill="#b9e2ce"/>
              <circle cx="22" cy="16" r="1" fill="#b9e2ce"/>
            </g>
          </symbol>
          <symbol id="bio-protein" viewBox="0 0 32 32">
            <rect width="30" height="30" x="1" y="1" fill="#087c4b" rx="15"/>
            <g fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7.5 11.5c3.3-4.2 7.2-4.4 9.5-.8 2.1 3.3-1.9 5.7.2 8.1 2.5 2.9 6.7.9 8.2-2.4" stroke="#fff" stroke-width="2.4"/>
              <path d="M7.8 21.4c2.9 4.1 7.1 3.8 9.1.4 2.2-3.8 4.8-4.5 8-2.3" stroke="#b9e2ce" stroke-width="2"/>
              <path d="M10.5 8.6c1.1 2.2 3.2 3.6 5.6 3.7M10 14.4c1.8 1.9 4.1 2.5 6.5 1.7" stroke="#b9e2ce" stroke-width="1.35"/>
            </g>
            <path fill="#fff" d="m23.8 13.2 3.7 1.6-3.3 2.5Z"/>
          </symbol>
          <symbol id="bio-bacteria" viewBox="0 0 32 32">
            <rect width="30" height="30" x="1" y="1" fill="#087c4b" rx="15"/>
            <g fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.2 10.2c3-3 7.9-3 11.6.7s3.7 8.6.7 11.6-7.9 3-11.6-.7-3.7-8.6-.7-11.6Z" stroke="#fff" stroke-width="2"/>
              <path d="M11.2 12.2 7.5 8.5M9.4 16H5M11.5 21.5l-3 3M20.8 10.7l3-3M23.5 15.5H28M21.5 22l3 3" stroke="#b9e2ce" stroke-width="1.35"/>
              <path d="M12.5 18.5c2.2-2.1 4.4-2.2 6.7-.2" stroke="#fff" stroke-width="1.5"/>
              <circle cx="14" cy="13.2" r="1.1" fill="#b9e2ce"/>
              <circle cx="20" cy="18.2" r="1.1" fill="#b9e2ce"/>
            </g>
          </symbol>
          <symbol id="bio-virus" viewBox="0 0 32 32">
            <rect width="30" height="30" x="1" y="1" fill="#087c4b" rx="15"/>
            <g fill="none" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="16" cy="16" r="6.5" stroke="#fff" stroke-width="2"/>
              <path d="M16 5.5v4M16 22.5v4M5.5 16h4M22.5 16h4M8.6 8.6l2.8 2.8M20.6 20.6l2.8 2.8M23.4 8.6l-2.8 2.8M11.4 20.6l-2.8 2.8" stroke="#b9e2ce" stroke-width="1.5"/>
              <circle cx="16" cy="5.5" r="1.2" fill="#fff"/>
              <circle cx="16" cy="26.5" r="1.2" fill="#fff"/>
              <circle cx="5.5" cy="16" r="1.2" fill="#fff"/>
              <circle cx="26.5" cy="16" r="1.2" fill="#fff"/>
              <circle cx="8.6" cy="8.6" r="1.2" fill="#fff"/>
              <circle cx="23.4" cy="23.4" r="1.2" fill="#fff"/>
              <circle cx="23.4" cy="8.6" r="1.2" fill="#fff"/>
              <circle cx="8.6" cy="23.4" r="1.2" fill="#fff"/>
              <path d="m12.5 16 2.1-2.1 2.2 2.2 2.4-2.4M13.4 19l2-1.8 2.2 2" stroke="#b9e2ce" stroke-width="1.25"/>
            </g>
          </symbol>
          <symbol id="bio-plasmid" viewBox="0 0 32 32">
            <rect width="30" height="30" x="1" y="1" fill="#087c4b" rx="15"/>
            <g fill="none" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="16" cy="16" r="9.5" stroke="#fff" stroke-width="2"/>
              <circle cx="16" cy="16" r="7.1" stroke="#b9e2ce" stroke-width="1.35"/>
              <path d="M16 6.5v4M24.2 11.3l-3.5 2M24.2 20.7l-3.5-2M16 25.5v-4M7.8 20.7l3.5-2M7.8 11.3l3.5 2" stroke="#fff" stroke-width="1.5"/>
              <path d="M13.1 13c5.8 1.2 5.8 4.8 0 6M18.9 13c-5.8 1.2-5.8 4.8 0 6M14.3 14.5h3.4M14.3 17.5h3.4" stroke="#b9e2ce" stroke-width="1.2"/>
            </g>
          </symbol>
        </defs>
        <g class="chain-network" mask="url(#network-fade)">
          <g class="chain-grid" aria-hidden="true">
            <path d="M-80 40H620M-80 120H620M-80 200H620M-80 280H620M-80 360H620"/>
            <path d="M-20-40V470M80-40V470M180-40V470M280-40V470M380-40V470M480-40V470M580-40V470"/>
          </g>
          <g class="chain-links" aria-hidden="true">
            <path class="chain-link main-chain" d="M-120 215H660"/>
            <path class="chain-link branch-chain" d="M164 215V108H270L376 68L610-20"/>
            <path class="chain-link branch-chain" d="M270 215V325H376L482 360L620 408"/>
            <path class="chain-link branch-chain" d="M376 215V125H650"/>
            <path class="chain-link flow main-flow" d="M-120 215H660"/>
            <path class="chain-link flow branch-flow branch-flow-1" d="M164 215V108H270L376 68L610-20"/>
            <path class="chain-link flow branch-flow branch-flow-2" d="M270 215V325H376L482 360L620 408"/>
            <path class="chain-link flow branch-flow branch-flow-3" d="M376 215V125H650"/>
          </g>
          <g class="chain-blocks" aria-hidden="true">
          <g class="chain-block main-block" transform="translate(33 190)" style="--pulse-delay: 0s">
            <circle class="block-pulse" cx="25" cy="25" r="32"/>
            <rect width="50" height="50" rx="11"/><path d="M13 19l12-6 12 6v14l-12 6-12-6Zm0 0 12 6 12-6M25 25v14"/>
          </g>
          <g class="chain-block main-block" transform="translate(139 190)" style="--pulse-delay: -0.45s">
            <circle class="block-pulse" cx="25" cy="25" r="32"/>
            <rect width="50" height="50" rx="11"/><path d="M13 19l12-6 12 6v14l-12 6-12-6Zm0 0 12 6 12-6M25 25v14"/>
          </g>
          <g class="chain-block main-block" transform="translate(245 190)" style="--pulse-delay: -0.9s">
            <circle class="block-pulse" cx="25" cy="25" r="32"/>
            <rect width="50" height="50" rx="11"/><path d="M13 19l12-6 12 6v14l-12 6-12-6Zm0 0 12 6 12-6M25 25v14"/>
          </g>
          <g class="chain-block main-block" transform="translate(351 190)" style="--pulse-delay: -1.35s">
            <circle class="block-pulse" cx="25" cy="25" r="32"/>
            <rect width="50" height="50" rx="11"/><path d="M13 19l12-6 12 6v14l-12 6-12-6Zm0 0 12 6 12-6M25 25v14"/>
          </g>
          <g class="chain-block main-block" transform="translate(457 190)" style="--pulse-delay: -1.8s">
            <circle class="block-pulse" cx="25" cy="25" r="32"/>
            <rect width="50" height="50" rx="11"/><path d="M13 19l12-6 12 6v14l-12 6-12-6Zm0 0 12 6 12-6M25 25v14"/>
          </g>

          <g class="chain-block branch-block" transform="translate(142 86)" style="--pulse-delay: -2.2s">
            <circle class="block-pulse" cx="22" cy="22" r="29"/>
            <rect width="44" height="44" rx="10"/><path d="M12 17l10-5 10 5v12l-10 6-10-6Zm0 0 10 5 10-5M22 22v13"/>
          </g>
          <g class="chain-block branch-block" transform="translate(248 86)" style="--pulse-delay: -2.6s">
            <circle class="block-pulse" cx="22" cy="22" r="29"/>
            <rect width="44" height="44" rx="10"/><path d="M12 17l10-5 10 5v12l-10 6-10-6Zm0 0 10 5 10-5M22 22v13"/>
          </g>
          <g class="chain-block branch-block" transform="translate(354 46)" style="--pulse-delay: -3s">
            <circle class="block-pulse" cx="22" cy="22" r="29"/>
            <rect width="44" height="44" rx="10"/><path d="M12 17l10-5 10 5v12l-10 6-10-6Zm0 0 10 5 10-5M22 22v13"/>
          </g>

          <g class="chain-block branch-block" transform="translate(248 303)" style="--pulse-delay: -2.3s">
            <circle class="block-pulse" cx="22" cy="22" r="29"/>
            <rect width="44" height="44" rx="10"/><path d="M12 17l10-5 10 5v12l-10 6-10-6Zm0 0 10 5 10-5M22 22v13"/>
          </g>
          <g class="chain-block branch-block" transform="translate(354 303)" style="--pulse-delay: -2.75s">
            <circle class="block-pulse" cx="22" cy="22" r="29"/>
            <rect width="44" height="44" rx="10"/><path d="M12 17l10-5 10 5v12l-10 6-10-6Zm0 0 10 5 10-5M22 22v13"/>
          </g>
          <g class="chain-block branch-block" transform="translate(460 338)" style="--pulse-delay: -3.2s">
            <circle class="block-pulse" cx="22" cy="22" r="29"/>
            <rect width="44" height="44" rx="10"/><path d="M12 17l10-5 10 5v12l-10 6-10-6Zm0 0 10 5 10-5M22 22v13"/>
          </g>

          <g class="chain-block branch-block" transform="translate(354 103)" style="--pulse-delay: -2.5s">
            <circle class="block-pulse" cx="22" cy="22" r="29"/>
            <rect width="44" height="44" rx="10"/><path d="M12 17l10-5 10 5v12l-10 6-10-6Zm0 0 10 5 10-5M22 22v13"/>
          </g>
          <g class="chain-block branch-block" transform="translate(460 103)" style="--pulse-delay: -3s">
            <circle class="block-pulse" cx="22" cy="22" r="29"/>
            <rect width="44" height="44" rx="10"/><path d="M12 17l10-5 10 5v12l-10 6-10-6Zm0 0 10 5 10-5M22 22v13"/>
          </g>
          </g>
          <g class="chain-particles" aria-hidden="true">
            <circle cx="5" cy="215" r="5"/><circle cx="111" cy="215" r="5"/>
            <circle cx="217" cy="215" r="5"/><circle cx="323" cy="215" r="5"/>
            <circle cx="429" cy="215" r="5"/><circle cx="535" cy="215" r="5"/>
            <circle cx="164" cy="160" r="5"/><circle cx="323" cy="88" r="5"/>
            <circle cx="270" cy="271" r="5"/><circle cx="429" cy="343" r="5"/>
            <circle cx="429" cy="125" r="5"/><circle cx="535" cy="125" r="5"/>
          </g>
        </g>
      </svg>
    </figure>
  `;

  document.querySelectorAll(".hero").forEach((hero) => {
    const shell = Array.from(hero.children).find((child) => child.classList.contains("shell"));
    if (!shell) return;

    hero.classList.add("has-bioblock-motif");
    shell.insertAdjacentHTML("beforeend", heroMotif);

    const biotechGlyphs = [
      "#bio-dna",
      "#bio-cell",
      "#bio-protein",
      "#bio-bacteria",
      "#bio-virus",
      "#bio-plasmid",
    ];

    shell.querySelectorAll(".chain-block").forEach((block, index) => {
      const isMainBlock = block.classList.contains("main-block");
      const cubeGlyph = Array.from(block.children).find((child) => child.tagName.toLowerCase() === "path");
      const biotechGlyph = document.createElementNS("http://www.w3.org/2000/svg", "use");

      biotechGlyph.classList.add("block-biotech-icon");
      biotechGlyph.setAttribute("href", biotechGlyphs[index % biotechGlyphs.length]);
      biotechGlyph.setAttribute("x", isMainBlock ? "9" : "6");
      biotechGlyph.setAttribute("y", isMainBlock ? "9" : "6");
      biotechGlyph.setAttribute("width", "32");
      biotechGlyph.setAttribute("height", "32");

      if (cubeGlyph) block.replaceChild(biotechGlyph, cubeGlyph);
    });
  });

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
