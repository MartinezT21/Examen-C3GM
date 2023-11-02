
import { useState } from "react";
import Card from "./Card";

function App() {

  const [nombreMascota, setNombreMascota] = useState('')
  const [nombreDueno, setNombreDueno] = useState('')
  const [showCard,setShowCard] = useState(false)
  const [error,setError] = useState(false)

  const handleChange = (event) => {
    if (event.target.name === "nombreMascota") {
      setNombreMascota(event.target.value);
    } else if (event.target.name === "nombreDueno") {
      setNombreDueno(event.target.value);
    }
  };

  const handleEnviar = () => {
    if (
      nombreMascota.length >= 3 &&
      nombreMascota.trim() !== "" &&
      nombreDueno.length >= 6
    ) {
      setShowCard(true);
      setError(false);
    } else {
      setShowCard(false);
      setError(true);
    }
  };


  return (
    <div className="App" style={{ margin: "500px" }}>
      <h1>Registro de Mascotas</h1>
      {!showCard ? (
        <>
          <input style={{margin: "20px"}}
            type="text"
            name="nombreMascota"
            placeholder="Nombre de la mascota"
            value={nombreMascota}
            onChange={handleChange}
          />

          <input style={{margin: "20px"}}
            type="text"
            name="nombreDueno"
            placeholder="Nombre de el dueño"
            value={nombreDueno}
            onChange={handleChange}
          />

          <button onClick={handleEnviar}>Enviar</button>
        </>
      ) : null}

     {showCard ? (
      
        <Card mascota={nombreMascota} dueno={nombreDueno}  />
      ) : (
        error && <p>Por favor chequea que la información sea correcta.</p>
      )}
    </div>
  );
}

export default App;

