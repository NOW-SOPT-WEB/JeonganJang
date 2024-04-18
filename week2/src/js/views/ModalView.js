import { HOME, MESSAGES } from "../constants";
import { qs } from "../utils/domHelper";
import View from "./View";
export default class ModalView extends View {
  setUp() {
    this.selectedProducts = this.props;
    this.selectedProductsList = Object.keys(this.selectedProducts).map(
      (key) => this.selectedProducts[key]
    );
  }

  navigateHome() {
    /**@todo 중복 함수라 제거 후 props로 내려받아서 공용사용? */
    location.href = HOME;
  }

  setEvent() {
    this.addEvent("click", ".close_btn", this.closeModal.bind(this));
    this.addEvent(
      "click",
      ".modal_purchase_btn",
      this.handleClickPurchaseBtn.bind(this)
    );
  }

  handleClickPurchaseBtn() {
    alert(MESSAGES.COMPLETE_PURCHASE);
    this.closeModal();
  }

  closeModal() {
    qs(".product_list_modal").close();
  }

  template() {
    console.log("template 내 this", this.selectedProducts);
    return `
      <dialog class="product_list_modal">
        <div class="modal_content">
            ${this.getSelectedProductTemplate()}
        </div>
        <div class="total_amount">총합 금액:${this.totalAmount()} </div>
        <div class="modal_btn_wrapper">
        <button class="modal_purchase_btn">구매하기</button>
        <button class="close_btn">Close</button>
        </div>
      </dialog>
    `;
  }

  getSelectedProductTemplate() {
    console.log("getSelectedProductTemplate 내 this", this.selectedProducts);

    return this.selectedProductsList
      .map(
        (item) =>
          `
              <div class="product_info">
                <img class="modal_product_img" 
                     src="${item.imageUrl}" 
                     alt="${item.name}">
                <div>
                  <p>Name: ${item.name}</p>
                  <p>Price: ${item.price.toLocaleString()}</p>
                </div>
              </div>
            `
      )
      .join("");
  }

  totalAmount() {
    let sum = 0;
    this.selectedProductsList.forEach((item) => {
      sum += item.price;
    });
    return sum.toLocaleString();
  }
}
