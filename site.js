/* Shared behaviour for every page: scroll reveal, sticky-header shadow, mobile menu. */
(function () {
  var root = document.documentElement;
  var items = document.querySelectorAll("[data-reveal]");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showAll() {
    for (var i = 0; i < items.length; i++) items[i].classList.add("is-in");
  }

  if (reduce || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    for (var i = 0; i < items.length; i++) io.observe(items[i]);
    // Safety net: never leave content hidden if the observer stalls.
    window.setTimeout(showAll, 4000);
  }

  // Shadow under the sticky header once the page has scrolled.
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-stuck", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Close the mobile sheet when a link inside it is followed.
  var menu = document.getElementById("site-menu");
  if (menu && typeof menu.hidePopover === "function") {
    menu.addEventListener("click", function (e) {
      var link = e.target.closest && e.target.closest("a");
      if (link && menu.matches(":popover-open")) menu.hidePopover();
    });
  }

  if (!root.classList.contains("js-reveal")) root.classList.add("js-reveal");
})();
