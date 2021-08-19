function TipAmount({ amount, handleInput }) {
  const handleClick = () => {
    handleInput(amount);
  };
  return (
    <div>
      <button onClick={handleClick}>{amount}%</button>
    </div>
  );
}

export default TipAmount;
