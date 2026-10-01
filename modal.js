class Modal {
constructor(id) {
  this.modal = document.getElementById(id);
  this.closeButton = this.modal.querySelector(".modal_close");
  this.overlay = document.querySelector(".overlay");
  this.listenCloseButton();
  this.listenOverlay();
}

open() {
  this.modal.classList.add("modal_showed");
  this.overlay.classList.add("overlay_showed");
}

close() {
  this.modal.classList.remove("modal_showed");
  this.overlay.classList.remove("overlay_showed");
}

isOpen() {
  return this.modal.classList.contains("modal_showed");
}

listenCloseButton() {
  this.closeButton.addEventListener("click", () => {
  this.close();
  });
}

listenOverlay() {
  this.overlay.addEventListener("click", () => {
  this.close();
    });
  }
}

export default Modal;