import {useState} from 'react';



function App() {

  const [count, setCount] = useState(0);

  function countUp(){
    setCount((prevState) => prevState + 1);
  }
  function countDown(){
    setCount((prevState) => prevState - 1);
  }


  function CardCompo(props){
    return(
      <div className="container">
        <div className="card_img">
        </div>
            <div className="card_sub">
                <h3>Hamburguer</h3>
                <p>Arcu, sagittis, ut lectus 
                  congue dapibus semper odio a, lobortis. 
                </p>
            </div>
            <div className="card_sub-contador">
                <button onClick={countDown}>-</button>
                <p>{count}</p>
                <button onClick={countUp}>+</button>
            </div>
        </div>
    )
  }

  return (
    <div className="App">
        <CardCompo>

        </CardCompo>

    
    </div>
  );
}

export default App;
