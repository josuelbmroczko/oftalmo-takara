// src/components/Hero.jsx
import styled from "styled-components";
import heroImage from "../../assets/fotos/consultorio.jpg";  // Coloque sua imagem aqui

// Hero Section: Melhor contraste e padding
const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(102, 102, 102, 0.7), rgba(0, 0, 0, 0.7)), url('${heroImage}') center/cover no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    height: auto;
    padding: 3rem 1rem;
  }
`;

// Hero Content: Efeito de desfoque no fundo com bordas mais finas
const HeroContent = styled.div`
   
  padding: 3rem 2rem;
  backdrop-filter: blur(8px); // Desfoque mais suave
  border-radius: 15px; // Bordas arredondadas mais suaves
  box-shadow: 0 6px 12px rgba(141, 141, 141, 0.164); // Sombra mais suave e refinada
  background: rgba(230, 230, 230, 0);  // Para deixar o fundo mais legível
  animation: fadeIn 1.5s ease-out;
  
  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 2rem;
  }
`;

// Título: Fonte mais elegante e animação suave
const Title = styled.h2`
  font-size: 3.5rem;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: fadeInTitle 1.5s ease-out forwards;

  @keyframes fadeInTitle {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
`;

// Subtítulo: Textos mais claros e animação suave para maior legibilidade
const Sub = styled.p`
  font-size: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  line-height: 1.8;
  opacity: 0;
  animation: fadeInSub 2s ease-out forwards;
  animation-delay: 0.5s;
  
  @keyframes fadeInSub {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Visão com excelência</Title>
        <Sub>Cuide da sua saúde ocular com a Clínica Takara, especialista em oftalmologia. Agende sua consulta e tenha a melhor visão de sua vida.</Sub>
      </HeroContent>
    </HeroSection>
  );
}
