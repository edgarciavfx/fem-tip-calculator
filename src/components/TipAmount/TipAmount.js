import './TipAmount.css';

const TipAmount = ({ amount, handleInput }) => {
  const handleClick = () => {
    handleInput(amount);
  };
  return (
    <div className="tip-amount">
      <button onClick={handleClick}>{amount}%</button>
    </div>
  );
};

export default TipAmount;
