import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {

  token = 'M5FF6KD4C72VPBKWTY4N';
  ordenar = 'date';

  state = {
    categorias: [],
    eventos: [],
  }

  componentDidMount() {
    console.log('Listo');
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {

    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        this.setState({
          categorias: categorias.categories,
        })
      })
  }

  obtenerEventos = async (busqueda) => {
    // console.log(busqueda);
    
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    // console.log(url);

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(eventos => {
       // console.log(eventos.events);
       this.setState({
         eventos: eventos.events,
       })
      })
    
  }

  render() {
    return(
      <div className="App">
        { /* ***** Componente: Header ***** */}
        <Header
                titulo='Eventos'
        ></Header>
        { /* ***** Componente: Formulario ***** */}
        <div className="uk-container">
          <Formulario
                      categorias={this.state.categorias}
                      obtenerEventos={this.obtenerEventos}
          ></Formulario>      
        </div>
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
