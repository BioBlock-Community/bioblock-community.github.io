(() => {
  const button = document.querySelector("[data-menu-button]");
  const navigation = document.querySelector("[data-navigation]");

  if (!button || !navigation) return;

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
})();
