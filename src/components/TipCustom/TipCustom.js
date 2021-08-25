import { useState } from 'react';
import './TipCustom.css';

const TipCustom = ({ handleInput }) => {
  const [customTip, setCustomTip] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  const handleChange = (e) => {
    setCustomTip(e.target.value);
    handleInput(e.target.value);
  };

  const handleClick = () => setIsHidden(!isHidden);
  const handleActive = (e) => handleInput(e.target.value);

  return (
    <div className="tip-custom">
      <button onClick={handleClick} hidden={!isHidden}>
        Custom
      </button>
      <input
        type="number"
        name="custom"
        value={customTip > 0 ? customTip : ''}
        placeholder={0}
        onChange={handleChange}
        onClick={handleActive}
        hidden={isHidden}
      />
    </div>
  );
};

export default TipCustom;
