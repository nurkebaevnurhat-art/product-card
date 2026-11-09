class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeButton = this.modal.querySelector(".modal_close");
    this.listenCloseButton();
    this.listenBackdrop();
  }

  open() {
    this.modal.showModal();
  }

  close() {
    this.modal.close();
  }

  isOpen() {
    return this.modal.open;
  }

  listenCloseButton() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  }

  listenBackdrop() {
    this.modal.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.close();
      }
    });
  }
}

export default Modal;
