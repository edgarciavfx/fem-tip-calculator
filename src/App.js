import './App.css';

function App() {
  return (
    <div className="App">
      UserInput <br />
        - NumberInput Bill/dollarIcon <br /> 
        - TipInput <br />
          - TipAmount 5 <br />
          - TipAmount 10 <br />
          - TipAmount 15 <br />
          - TipAmount 25 <br />
          - TipAmount 50 <br />
          - TipCustom <br />
        - NumberInput Number of People/peopleIcon <br />
      UserOutput <br />
        - PerPerson Tip Amount / math || value || function <br />
        - PerPerson Tota l/ math || value || function <br />
        - Reset onClick <br />
      ----------------------------------------
      <div class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/edgarciavfx">edgarciavfx</a>.
      </div>
    </div>
  );
}

export default App;
