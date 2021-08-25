import { useState } from 'react';
import NumberInput from '../NumberInput/NumberInput';
import TipInput from '../TipInput/TipInput';
import PerPerson from '../PerPerson/PerPerson';
import ResetButton from '../ResetButton/ResetButton';
import personIcon from '../../images/icon-person.svg';
import dollarIcon from '../../images/icon-dollar.svg';
import logo from '../../images/logo.svg';
import './TipCalculator.css';

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const tipCalc = (bill * tip) / 100;
  const totalCalc = tipCalc + Number(bill);

  const handleInput = (func) => (e) => {
    func(e);
    setIsDisabled(false);
  };

  const handleReset = () => {
    refreshPage();
  };

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="tip-calculator">
      <img src={logo} className="tip-calculator-logo" alt="logo" />
      <div className="tip-calculator-card">
        <div className="tip-calculator-input">
          <NumberInput
            name="Bill"
            icon={dollarIcon}
            handleInput={handleInput(setBill)}
          />
          <TipInput handleInput={handleInput(setTip)} />
          <NumberInput
            name="Number of People"
            icon={personIcon}
            handleInput={handleInput(setPeople)}
          />
        </div>
        <div className="tip-calculator-output">
          <PerPerson title="Tip Amount" tip={tipCalc} people={people} />
          <PerPerson title="Total" tip={totalCalc} people={people} />
          <ResetButton handleReset={handleReset} isDisabled={isDisabled} />
        </div>
      </div>
      <div className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/edgarciavfx"
          target="_blank"
          rel="noreferrer"
        >
          edgarciavfx
        </a>
        .
      </div>
    </div>
  );
};

export default TipCalculator;
