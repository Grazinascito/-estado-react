import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import {useState} from 'react';


function App() {

  const [hiddenCook, setHiddenCook] = useState(true);
    
  function changeHidden(){

    setHiddenCook(hiddenCook => !hiddenCook);

  }

  function NossoComponente(props){
    
    return(
  
        <div className="card">
            <img src={props.close} onClick={changeHidden}  alt="close" className="close"/>
            
            {hiddenCook && <img src={props.icon === "cookie" && cookie} alt={props.icon === "cookie" && "cookie"} className={`icon`}/>}
  
            <p>{props.children}</p>
            <button className={props.icon} onClick={changeHidden}>{props.mensagemBtn}</button>
        </div>
    )
  }

  return (
    <div className="App">

      <NossoComponente close={close} icon="cookie" mensagemBtn="Tudo bem!">
          Nós utilizamos cookies para melhorar <br/> nossa UX, analytics e marketing.
      </NossoComponente>

    </div>
  );
}

export default App;