import { useRef } from "react";
import Modal from "./Modal";
import "./app.style.scss";

function App() {
  const modalRef = useRef();
  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  console.log("parent rendered");
  return (
    <div className="app">
      <p>Parent Component</p>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </div>
  );
}

export default App;
