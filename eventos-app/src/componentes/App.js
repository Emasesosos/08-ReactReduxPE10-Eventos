import React, { Component } from 'react';
import Header from './Header';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        { /* ***** Componente: Header ***** */}
        <Header
                titulo='Eventos'
        ></Header>
        { /* ***** Componente: Imagen ***** */}
        <Imagen></Imagen>
      </div>
    )
  }
}

/*
function App() {
  return (
    
  );
}
*/

export default App;
