import "./Modal.css";

// 두 모달이 같이 쓰는 틀. 안쪽 내용은 children으로 받는다.
function Modal({ title, onClose, children }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
