import { Popup } from "../components/popup.js";
const popupElement = document.querySelector(".popup");
const mainButton = document.querySelector(".repair__track-status-button");

const popup = new Popup(popupElement);
popup.setEventListeners();
mainButton.addEventListener('click', () => {
    popup.open();
})