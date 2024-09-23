import React, { FormEventHandler } from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void | boolean;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <>
      <div id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box ">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
