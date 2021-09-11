import kelvin from './assets/kelvin-costa.png';
import {useState} from 'react';

function Cards(props){


  const [change, setChange] = useState('btn-kelvin');
  const [count, setCount] = useState(140);

  function changeState(){

    setChange((prevState) => prevState === 'btn-kelvin'? 'btn-click':'btn-kelvin');
    setCount((prevState) => prevState === 140 ? count + 1: count);
  }

  return (
    <>
    <div className="card">
        <img src={kelvin} alt=""/>

        <h3>Kelvin</h3>
        <p>@costa</p>
        <div className="followers">
          <span>{change === 'btn-click' ? count: 140} seguidores</span>
          <span>207 seguindo</span>
        </div>
     </div>

    <div>
      <button className={`btn-kelvin ${change}`} onClick={changeState}>
          {change === 'btn-kelvin' ? "Seguir":"Seguindo"}
      </button>
     </div>
     </>
  )
}

function App() {
 
    return (
      <div className="container">
          <Cards>

          </Cards>
        
        </div>
    );
}

export default App;
