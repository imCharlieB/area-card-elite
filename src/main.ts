declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

import { CUSTOM_CARD_ID } from "./common";
import { MyLitCard } from "./card";
import { MyLitCardEditor } from "./editor";

customElements.define(CUSTOM_CARD_ID, MyLitCard);
customElements.define(CUSTOM_CARD_ID + "-editor", MyLitCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: CUSTOM_CARD_ID,
  name: "A Lit Card Template",
  description: "A simple LIT Card for Home Assistant",
});
