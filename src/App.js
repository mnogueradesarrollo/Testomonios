import "./App.css";
import Testimonio from "./componentes/testimonio";

function App() {
  return (
    <div className="App">
      <div className="container-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          name="Ana Gomez"
          pais="Argentina"
          image="ana"
          cargo="Project Manager"
          empresa="Mercado Libre"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur voluptatum voluptate commodi inventore explicabo necessitatibus, error tenetur qui laboriosam deserunt esse dolorum assumenda fuga incidunt odio temporibus optio ab."
        />
        <Testimonio
          name="Agustina Fernandez"
          pais="Argentina"
          image="agustina"
          cargo="Programadora Sr."
          empresa="Amazon"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur voluptatum voluptate commodi inventore explicabo necessitatibus, error tenetur qui laboriosam deserunt esse dolorum assumenda fuga incidunt odio temporibus optio ab."
        />
        <Testimonio
          name="Elena Martinelli"
          pais="Argentina"
          image="elena"
          cargo="Gestora"
          empresa="Adidas"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur voluptatum voluptate commodi inventore explicabo necessitatibus, error tenetur qui laboriosam deserunt esse dolorum assumenda fuga incidunt odio temporibus optio ab."
        />
      </div>
    </div>
  );
}

export default App;
