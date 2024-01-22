import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "../Modals/ToDoModal/Modal";
import "./card.css";

function Card({ title }) {
  const [isActiveModal, setIsActiveModal] = useState(false);
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      {title === "To-Do" && (
        <div className="add_btn" onClick={() => setIsActiveModal(true)}>
          <FaPlusCircle size={20} />
          <p>Add To-Do</p>
        </div>
      )}
      {isActiveModal && <Modal setIsModalActive={setIsActiveModal} />}
    </div>
  );
}

export default Card;
