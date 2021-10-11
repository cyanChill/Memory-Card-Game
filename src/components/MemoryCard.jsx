import "../styles/MemoryCard.style.css";

const MemoryCard = ({ onUpdate, card }) => {
  return (
    <div className="card" onClick={() => onUpdate(card)}>
      <img src={card.cardInfo.image} alt="Pokemon Img" />
      <p>{card.cardInfo.title}</p>
    </div>
  );
};

export default MemoryCard;
