document.addEventListener("DOMContentLoaded", function() {
  class MobileMenu {
  constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector(".mobile-menu__btn");
      this.DOM.link = document.querySelectorAll('.mobile-menu__link');
      this.DOM.container = document.querySelector("#global-container");
      this.eventType = this._getEventType();
      this._addEvent();
  }

  _getEventType() {
    const isTouchCapable =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch) ||
      navigator.maxTouchPoints > 0 ||
      window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.link.forEach(function (button) {
      button.addEventListener("click", this._toggle.bind(this));
    }, this);
  }
}

new MobileMenu();
});
