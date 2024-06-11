/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ConditionsContext, MessagesContext } from "../App";
import cameraIcon from "../assets/images/camera.svg";
import sendIcon from "../assets/images/send.svg";
import Message from "./Message";
import { v4 } from "uuid";

const Card = ({ card, index }) => {
  const [messages, setMessages] = useContext(MessagesContext);
  const [setIsModalOpen] = useContext(ConditionsContext);
  const [input, setInput] = useState("");
  
  const sendMessage = () => {
    if (input.length) {
      const item = {
        id: v4(),
        value: input,
        type: "text",
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
      };
      setMessages([...messages, item]);
      setInput("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="card">
      <div className="container card__wrap">
        <div className="card__header">
          <img className="card__header-img" src={card.img} alt="" />
          <div className="card__header-desc">
            <h2 className="card__header-desc-title">{card.title}</h2>
            <p className="card__header-desc-status">{card.status}</p>
          </div>
        </div>
        <div className={"card__content"}>
          {messages?.map((message) => (
            <Message message={message} key={message.id} index={index} />
          ))}
        </div>
        <div className="card__footer">
          <input
            type="text"
            className="card__footer-input"
            placeholder="Написать сообщение..."
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          {input.length ? (
            <button className="card__footer-btn" onClick={() => sendMessage()}>
              <img className="card__footer-img" src={sendIcon} alt="" />
            </button>
          ) : (
            <button
              className="card__footer-btn"
              onClick={() => setIsModalOpen(true)}
            >
              <img className="card__footer-img" src={cameraIcon} alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
