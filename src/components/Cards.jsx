/* eslint-disable react/prop-types */
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <div className="cards">
      <div className="container cards__wrap">
        {cards?.map((card, index) => (
          <Card card={card} key={card.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
