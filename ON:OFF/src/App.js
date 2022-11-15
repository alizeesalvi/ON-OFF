import { useState } from "react";

function App() {
  //1.state (Etat, données)
  const [etat, setEtat] = useState(true);

  const changeEtat = () => {
    setEtat(!etat); //inverse
    //if (etat == true) {
    // setEtat(false);
    // } else {
    //  setEtat(true);
    // }
  };

  //comportement

  //affichage

  if (etat) {
    return (
      <div>
        <button style={{ background: "lightgreen" }} onClick={changeEtat}>
          ON
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button style={{ background: "red" }} onClick={changeEtat}>
          OFF
        </button>
      </div>
    );
  }
}
export default App;
