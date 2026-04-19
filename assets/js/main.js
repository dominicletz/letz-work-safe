/* Letz Work Safe — vanilla JS
   Mobile nav, FAQ accordion, smooth scroll, contact form, active nav */

(function () {
  "use strict";

  // ---------- Mobile nav toggle ----------
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.querySelector(".primary-nav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const open = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    primaryNav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        if (window.innerWidth <= 960) {
          primaryNav.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      }),
    );
  }

  // ---------- Active nav highlight ----------
  // Marks the nav link matching the current page (including index.html / "/")
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".primary-nav a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("is-active");
      a.setAttribute("aria-current", "page");
    }
  });

  // ---------- FAQ accordion ----------
  // Markup pattern:
  //   <div class="faq__item" aria-expanded="false">
  //     <button class="faq__q" aria-controls="..." aria-expanded="false">...</button>
  //     <div class="faq__a" id="...">...</div>
  //   </div>
  document.querySelectorAll(".faq__item").forEach((item) => {
    const btn = item.querySelector(".faq__q");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.getAttribute("aria-expanded") === "true";
      // Single-open: collapse siblings
      item
        .closest(".faq")
        ?.querySelectorAll('.faq__item[aria-expanded="true"]')
        .forEach((sib) => {
          sib.setAttribute("aria-expanded", "false");
          sib.querySelector(".faq__q")?.setAttribute("aria-expanded", "false");
        });
      const next = !isOpen;
      item.setAttribute("aria-expanded", String(next));
      btn.setAttribute("aria-expanded", String(next));
    });
  });

  // ---------- Contact form ----------
  // Pure client-side: validate via the browser, then swap form for a success card.
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const success = document.querySelector("[data-form-success]");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.setAttribute("hidden", "");
      success?.removeAttribute("hidden");
      success?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  // ---------- Year in footer ----------
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
