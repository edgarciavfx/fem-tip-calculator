import './TipAmount.css';

function TipAmount({ amount, handleInput }) {
  const handleClick = () => {
    handleInput(amount);
  };
  return (
    <div className="TipAmount">
      <button onClick={handleClick}>{amount}%</button>
    </div>
  );
}

export default TipAmount;
