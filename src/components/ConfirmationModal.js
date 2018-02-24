import React from 'react'
import Modal from 'react-modal'

const ConfirmationModal = ({ isOpen, modalTitle, modalBody, handleYes, handleNo }) => (
    <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        contentLabel={modalTitle}
        closeTimeoutMS={200}
        className="modal">
            <h3 className="modal__title">{modalTitle}</h3>
            <p className="modal__body">{modalBody}</p>
            <div className="modal__actions">
                <button className="button button-yes" onClick={handleYes}>Yes</button>
                <button className="button button-no button--secondary" onClick={handleNo}>No</button>
            </div>
    </Modal>
)

export default ConfirmationModal
