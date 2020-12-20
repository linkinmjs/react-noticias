import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  // definir la categoría y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=c660b2d0a3c14a31bc77126e5b646e7e`

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        
        if(noticias.hasOwnProperty('articles')){
          guardarNoticias(noticias.articles)
          console.log(noticias);
        }else{
          guardarNoticias([{ message: 'Requests from the browser are not allowed on the Developer plan, except from localhost.', url: 'error'}])
        }

    }
    consultarAPI()
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
