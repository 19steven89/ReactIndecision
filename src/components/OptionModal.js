import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    // set boolean val for props.selectedOption
    // content label is used to let the user click outside of the modul to close it, rather than have to click the button
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOptionState}
        contentLabel = "Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOptionState}>Okay</button>
    </Modal>
);

export default OptionModal;
