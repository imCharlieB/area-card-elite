declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

import { CUSTOM_CARD_ID } from "./common";
import { AreaCardElite } from "./card";
import { AreaCardEliteEditor } from "./editor";

customElements.define(CUSTOM_CARD_ID, AreaCardElite);
customElements.define(CUSTOM_CARD_ID + "-editor", AreaCardEliteEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: CUSTOM_CARD_ID,
  name: "Area Card Elite",
  description: "An enhanced area card for Home Assistant",
});

console.log("Area Card Elite loaded");
