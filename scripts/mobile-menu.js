class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.main = document.querySelector(".mobile-menu__main");
    this.DOM.container = document.querySelector("#global-container");
    this.DOM.link = document.querySelectorAll('a[href^="#"]');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch) ||
      navigator.maxTouchPoints > 0 ||
      window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? "touchend" : "click";
  }

  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    // this.DOM.link.addEventListener(this.eventType, this._toggle.bind(this));
    // this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.main.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();
