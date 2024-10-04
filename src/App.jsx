import { useState } from "react";
import "./App.css";

function App() {
  const [localClick, setLocalClick] = useState([]);

  const clicou = (event) => {
    const newPosition = {
      posicaoX: event.clientX,
      posicaoY: event.clientY,
    };
    setLocalClick((prev) => [...prev, newPosition]);

    console.log(newPosition);
  };

  const Desfazer = (event) => {
    event.stopPropagation();

    setLocalClick((prev) => {
      const apagarCirculo = prev.slice(0, -1);
      return apagarCirculo;
    });
    console.log("desfazer");

    
  };

  const Resfazer = (event) => {
    event.stopPropagation();
    console.log("desfazer");
  };

  return (
    <div id="page" onClick={clicou}>
      <div className="btns">
        <button onClick={Desfazer}>Desfazer</button>
        <button onClick={Resfazer}>Refazer</button>
      </div>
      {localClick.map((local, index) => (
        <div
          key={index }
          style={{ left: local.posicaoX, top: local.posicaoY }}
          className="circulo"
        />
      ))}
    </div>
  );
}

export default App;
