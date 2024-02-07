import { useState, useImperativeHandle, forwardRef } from "react";

const Modal = (props, ref) => {
  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true)
  }));
  console.log("child rendered");
  if (!modalState) return null;
  return (
    <div className="modal">
      <p>This is my modal</p>
      <button onClick={() => setModalState(false)}>close</button>
    </div>
  );
};

export default forwardRef(Modal);
