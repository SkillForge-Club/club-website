const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  initializeInfiniteScroll();
}

function initializeInfiniteScroll() {
  scrollers.forEach((scroller) => {
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const items = Array.from(scrollerInner.children);

    // Clone items to ensure seamless scrolling
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(clone);
    });

    // Calculate total width for responsive animations
    const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth + 20, 0); // +20 for gap
    scrollerInner.style.width = `${totalWidth * 2}px`; // Double for clones
  });
}
