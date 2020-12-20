import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

  // definir la categoría y noticias
  const [categoria, guardarCategoria] = useState('');

  useEffect(()=>{
    const consultarAPI = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=c660b2d0a3c14a31bc77126e5b646e7e`

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        console.log(noticias);
    }
    consultarAPI()
  }, [categoria])

  return (
    <>
      <Header titulo="Buscador de Noticias"/>

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>
    </>
  );
}

export default App;
