/* ============================================================
   MeiMei Academy — behavior
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Theme ---------------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  function initTheme() {
    const saved = localStorage.getItem("meimei-theme");
    if (saved) {
      root.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.setAttribute("data-theme", prefersDark ? "dark" : "light");
    }
  }
  initTheme();

  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("meimei-theme", next);
  });

  /* ---------------- Announcement bar ---------------- */
  const announceBar   = document.getElementById("announceBar");
  const announceClose = document.getElementById("announceClose");
  if (announceBar && sessionStorage.getItem("meimei-announce-closed")) {
    announceBar.style.display = "none";
  }
  announceClose?.addEventListener("click", () => {
    announceBar?.classList.add("hidden");
    setTimeout(() => { if (announceBar) announceBar.style.display = "none"; }, 350);
    sessionStorage.setItem("meimei-announce-closed", "1");
  });

  /* ---------------- Mobile nav ---------------- */
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger?.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------- Toast ---------------- */
  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.querySelector("span").textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  async function copyText(text, triggerEl) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) { /* no-op */ }
      document.body.removeChild(ta);
    }
    showToast("Prompt copied to clipboard");
    if (triggerEl) {
      triggerEl.classList.add("copied");
      const original = triggerEl.querySelector(".copy-label")?.textContent;
      const label = triggerEl.querySelector(".copy-label");
      if (label) label.textContent = "Copied";
      setTimeout(() => {
        triggerEl.classList.remove("copied");
        if (label && original) label.textContent = original;
      }, 1600);
    }
  }

  /* ---------------- Icons (inline, reused) ---------------- */
  const ICONS = {
    copy: `<svg viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="12" height="12" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M6 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V6" stroke="currentColor" stroke-width="1.6"/></svg>`,
    heart: `<svg viewBox="0 0 24 24"><path d="M12 20.4 4.7 13.3a4.9 4.9 0 0 1 0-7 4.9 4.9 0 0 1 7 0l.3.3.3-.3a4.9 4.9 0 0 1 7 0 4.9 4.9 0 0 1 0 7L12 20.4z"/></svg>`
  };

  /* ---------------- Gallery ---------------- */
  const galleryGrid = document.getElementById("galleryGrid");
  const galleryEmpty = document.getElementById("galleryEmpty");
  const chips = document.querySelectorAll(".chip");
  const searchInput = document.getElementById("searchInput");

  let activeCategory = "All";
  let searchTerm = "";

  function formatLikes(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
  }

  function truncate(str, max) {
    return str.length > max ? str.slice(0, max).trim() + "…" : str;
  }

  function renderGallery() {
    if (!galleryGrid) return;
    const term = searchTerm.trim().toLowerCase();
    const filtered = GALLERY_ITEMS.filter((item) => {
      const inCategory = activeCategory === "All" || item.category === activeCategory;
      const inSearch =
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.prompt.toLowerCase().includes(term) ||
        item.tool.toLowerCase().includes(term);
      return inCategory && inSearch;
    });

    galleryGrid.innerHTML = filtered
      .map(
        (item, i) => `
      <article class="g-card${item.video ? ' g-card--video' : ''}" data-id="${item.id}" style="animation-delay:${Math.min(i * 40, 300)}ms">
        <div class="g-media">
          ${item.video
            ? `<video src="${item.video}" poster="${item.image}" muted loop playsinline preload="none" class="g-video"></video>
               <div class="g-play-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4.5l14 7.5-14 7.5V4.5z"/></svg></div>`
            : `<img src="${item.image}" alt="${item.title}" loading="lazy" />`}
          <span class="g-badge">${item.category}</span>
          <span class="g-likes">${ICONS.heart}${formatLikes(item.likes)}</span>
        </div>
        <div class="g-body">
          <h3 class="g-title">${item.title}</h3>
          <p class="g-prompt">${truncate(item.prompt, 120)}</p>
          <div class="g-foot">
            <span class="g-tool">${item.tool}</span>
            <button class="btn-copy" type="button" data-copy="${item.id}">
              ${ICONS.copy}<span class="copy-label">Copy prompt</span>
            </button>
          </div>
        </div>
      </article>`
      )
      .join("");

    /* Play/pause videos on hover */
    galleryGrid.querySelectorAll('.g-video').forEach(vid => {
      const card = vid.closest('.g-card');
      card.addEventListener('mouseenter', () => { vid.play().catch(() => {}); });
      card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
    });

    galleryEmpty?.classList.toggle("show", filtered.length === 0);
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.category;
      renderGallery();
    });
  });

  searchInput?.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderGallery();
  });

  /* Click handling for gallery: copy button vs. open modal */
  galleryGrid?.addEventListener("click", (e) => {
    const copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) {
      e.stopPropagation();
      const item = GALLERY_ITEMS.find((g) => g.id === copyBtn.dataset.copy);
      if (item) copyText(item.prompt, copyBtn);
      return;
    }
    const card = e.target.closest(".g-card");
    if (card) {
      const item = GALLERY_ITEMS.find((g) => g.id === card.dataset.id);
      if (item) openModal(item);
    }
  });

  /* ---------------- Modal ---------------- */
  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");
  let lastFocused = null;

  function openModal(item) {
    if (!modalOverlay || !modalBody) return;
    modalBody.innerHTML = `
      <div class="modal-media">
        ${item.video
          ? `<video src="${item.video}" poster="${item.image}" controls autoplay muted loop playsinline class="modal-video"></video>`
          : `<img src="${item.image}" alt="${item.title}" />`}
      </div>
      <div class="modal-body">
        <span class="g-badge">${item.category}</span>
        <h3>${item.title}</h3>
        <div class="modal-meta">
          <span>${ICONS.heart}${formatLikes(item.likes)} likes</span>
          <span>${item.tool}</span>
        </div>
        <div class="modal-prompt">${item.prompt}</div>
        <button class="btn-copy" type="button" data-copy-modal="${item.id}">
          ${ICONS.copy}<span class="copy-label">Copy full prompt</span>
        </button>
      </div>
    `;
    lastFocused = document.activeElement;
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    modalOverlay.querySelector(".modal-close")?.focus();
  }

  function closeModal() {
    modalOverlay?.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  modalBody?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-copy-modal]");
    if (!btn) return;
    const item = GALLERY_ITEMS.find((g) => g.id === btn.dataset.copyModal);
    if (item) copyText(item.prompt, btn);
  });

  document.getElementById("modalClose")?.addEventListener("click", closeModal);
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay?.classList.contains("open")) closeModal();
  });

  /* ---------------- Workflows ---------------- */
  const workflowList = document.getElementById("workflowList");

  function renderWorkflows() {
    if (!workflowList) return;
    workflowList.innerHTML = WORKFLOWS.map(
      (flow) => `
      <article class="workflow">
        <div class="workflow-head">
          <div>
            <h3>${flow.title}</h3>
            <p>${flow.summary}</p>
          </div>
        </div>
        <div class="steps">
          ${flow.steps
            .map(
              (step, i) => `
            <div class="step">
              <span class="step-index">${String(i + 1).padStart(2, "0")}</span>
              <div class="step-thumb"><img src="${step.image}" alt="${step.label}" loading="lazy" /></div>
              <h4>${step.label}</h4>
              <span class="step-tool">${step.tool}</span>
              <p class="step-note">${step.note}</p>
              <button class="btn-copy" type="button" data-flow="${flow.id}" data-step="${i}">
                ${ICONS.copy}<span class="copy-label">Copy step prompt</span>
              </button>
            </div>`
            )
            .join("")}
        </div>
      </article>`
    ).join("");
  }

  workflowList?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-flow]");
    if (!btn) return;
    const flow = WORKFLOWS.find((f) => f.id === btn.dataset.flow);
    const step = flow?.steps[Number(btn.dataset.step)];
    if (step) copyText(step.prompt, btn);
  });

  /* ---------------- Newsletter (demo only) ---------------- */
  const ctaForm = document.getElementById("ctaForm");
  ctaForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("You're on the list — thanks for following along");
    ctaForm.reset();
  });

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Init ---------------- */
  renderGallery();
  renderWorkflows();

  /* ---------------- Promo Popup (5-second delay) ---------------- */
  const promoOverlay = document.getElementById("promoOverlay");
  const promoClose   = document.getElementById("promoClose");
  const promoCountdownEl = document.getElementById("promoCountdown");

  // Session-based: show once per browser session
  const PROMO_KEY = "meimei-promo-shown";

  function openPromo() {
    if (!promoOverlay) return;
    promoOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    startCountdown();
  }

  function closePromo() {
    if (!promoOverlay) return;
    promoOverlay.classList.remove("open");
    document.body.style.overflow = "";
    sessionStorage.setItem(PROMO_KEY, "1");
  }

  // Countdown: 10 minutes, stored in sessionStorage so it persists if modal is reopened
  const COUNTDOWN_KEY = "meimei-promo-end";
  let countdownInterval = null;

  function startCountdown() {
    if (!promoCountdownEl) return;
    // Initialise or restore the end timestamp
    let endTime = parseInt(sessionStorage.getItem(COUNTDOWN_KEY) || "0", 10);
    if (!endTime || endTime <= Date.now()) {
      endTime = Date.now() + 10 * 60 * 1000; // 10 minutes
      sessionStorage.setItem(COUNTDOWN_KEY, String(endTime));
    }
    clearInterval(countdownInterval);
    function tick() {
      const remaining = Math.max(0, endTime - Date.now());
      const m = Math.floor(remaining / 60000);
      const s = Math.floor((remaining % 60000) / 1000);
      promoCountdownEl.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
      if (remaining === 0) {
        clearInterval(countdownInterval);
        promoCountdownEl.textContent = "00:00";
      }
    }
    tick();
    countdownInterval = setInterval(tick, 1000);
  }

  // Show after 5 seconds, only once per session
  if (!sessionStorage.getItem(PROMO_KEY)) {
    setTimeout(openPromo, 5000);
  }

  promoClose?.addEventListener("click", closePromo);
  promoOverlay?.addEventListener("click", (e) => {
    if (e.target === promoOverlay) closePromo();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && promoOverlay?.classList.contains("open")) closePromo();
  });
})();

