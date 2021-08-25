import { useState } from 'react';
import './TipCustom.css';

function TipCustom({ handleInput }) {
  const [customTip, setCustomTip] = useState();
  const [isHidden, setIsHidden] = useState(true);

  const handleChange = (e) => {
    setCustomTip(e.target.value);
    handleInput(e.target.value);
  };
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  const handleActive = (e) => {
    handleInput(e.target.value);
  };

  return (
    <div className="TipCustom">
      <button onClick={handleClick} hidden={!isHidden}>
        Custom
      </button>
      <input
        type="number"
        name="custom"
        value={customTip}
        placeholder={0}
        onChange={handleChange}
        onClick={handleActive}
        hidden={isHidden}
      />
    </div>
  );
}

export default TipCustom;
