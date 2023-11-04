import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="Container1">
        <img src="/images/Skillactive.svg" />
      </div>

      <div className="Container2">
          <img src="/images/Search.svg" />
          <input id="s" placeholder="Введите название секции или кружка" type="search"></input>
          <button type="submit">Найти</button>
      </div>

      <div className="Container3">
          <div className="Container31">
            <div className="Container311">
              <div>
                <h1 id='h1'>Узнай какое занятие</h1>
                <h1 id='h2'>подойдет вашему ребёнку</h1>
              </div>
            </div>
            <div className="Container312">
              <button>Узнать</button>
            </div>
          </div>
          <div className="Container32">
            <img id='img1' src="/images/Frame m2.svg" />
            <img id='img2' src="/images/Frame 1.svg" />
            <img id='img3' src="/images/Frame 2.svg" />
            <img id='img4' src="/images/Frame 3.svg" />
          </div>
      </div>

    </div>
  );
}

export default App;
