import React from "react";
import Comentario from "./components/Comentario.jsx";
import Saludo from "./components/Saludo.jsx";

function App() {
  return (
    <div className="container   mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona="Ignacio" edad={30} />
      <Saludo persona="Juanito" edad={28} />
      <Saludo persona="Pedrito" edad={25} />
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario
        urlImagen="https://picsum.photos/64"
        persona="Ignacio"
        texto="fffff"
      />
      <Comentario
        urlImagen="https://picsum.photos/64"
        persona="Juanito"
        texto="aaaa"
      />
      <Comentario
        urlImagen="https://picsum.photos/64"
        persona="Pedrito"
        texto="bbbb"
      />
    </div>
  );
}

export default App;
