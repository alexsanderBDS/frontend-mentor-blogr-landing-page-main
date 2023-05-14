const btnMenuEl = document.querySelector(".btn-menu");
const dropdownLinkEl = document.querySelectorAll(".dropdown-button");

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
