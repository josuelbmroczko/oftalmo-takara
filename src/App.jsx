// src/App.js
import React from 'react';
import GlobalStyle from './assets/styles/GlobalStyle';
import Header from './componentes/Header/Header';
import Hero from './componentes/Hero/Hero';
import Sobre from './componentes/Sobre/Sobre';
import Servicos from './componentes/Servicos/Servicos';
import Depoimentos from './componentes/Depoimentos/Depoimentos';
import Galeria from './componentes/Galeria/Galeria';
import Contato from './componentes/Contato/Contato';
import Footer from './componentes/Footer/Footer';
 

function App() {
  return (
    <>
      <GlobalStyle /> {/* Aplica os estilos globais */}
      <Header /> {/* Header fixo com navegação */}
      <Hero /> {/* Seção Hero com imagem e chamada */}
      <Sobre /> 
      <Servicos /> {/* Seção com os serviços oferecidos */}
      <Depoimentos /> {/* Depoimentos de pacientes */}
      <Galeria /> {/* Galeria de imagens do consultório */}
      <Contato /> {/* Formulário de contato */}
      <Footer /> {/* Rodapé com informações */}
    </>
  );
}

export default App;
