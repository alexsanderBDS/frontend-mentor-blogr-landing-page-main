const btnMenuEl = document.querySelector(".btn-menu");
const dropdownLinkEl = document.querySelectorAll(".dropdown-button");
const featuresEl = document.querySelector(".features");
const howEl = document.querySelector(".section-how");

btnMenuEl.addEventListener("click", function () {
  /**
   * @returns {Element}
   */
  const menuEl = {
    getElement: () => this.querySelector(".menu-icon"),
  };

  if (document.body.classList.contains("mobile-open")) {
    menuEl.getElement().setAttribute("src", "images/icon-hamburger.svg");
    document.body.removeAttribute("class");
    return document.body.classList.remove("mobile-open");
  }

  menuEl.getElement().setAttribute("src", "images/icon-close.svg");
  return document.body.classList.add("mobile-open");
});

dropdownLinkEl.forEach(function (el) {
  el.addEventListener("click", () => {
    if (el.parentNode.classList.contains("open")) {
      return el.parentNode.classList.remove("open");
    }

    return el.parentNode.classList.add("open");
  });
});

// OBSERVER VIEWPORT

function observer(element) {
  const obs = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      if (!ent.isIntersecting) {
        element.classList.add("hide");
        element.classList.remove("show");
      }
      if (ent.isIntersecting) {
        element.classList.remove("hide");
        element.classList.add("show");
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    }
  );
  obs.observe(element);
}

// OBSERVER VIEWPORT

// APPY OBSERVER
observer(featuresEl);
observer(howEl);
// APPY OBSERVER
