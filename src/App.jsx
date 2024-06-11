/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import Cards from "./components/Cards";
import profile1 from "./assets/images/profile1.png";
import profile2 from "./assets/images/profile2.png";
import Modal from "./components/Modal";

const MessagesContext = createContext();
const ConditionsContext = createContext();

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Александр",
      status: "Онлайн",
      img: profile1,
    },
    {
      id: 2,
      title: "Евгений",
      status: "Онлайн",
      img: profile2,
    },
  ]);
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ConditionsContext.Provider value={[setIsModalOpen]}>
      <MessagesContext.Provider value={[messages, setMessages]}>
        <Cards cards={cards} />
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </MessagesContext.Provider>
    </ConditionsContext.Provider>
  );
};

export default App;
export { MessagesContext, ConditionsContext };
