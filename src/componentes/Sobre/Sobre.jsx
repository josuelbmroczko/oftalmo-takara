// src/components/Sobre.jsx
import styled from "styled-components";

// Seção principal
const Section = styled.section`
  padding: 5rem 2rem;
  background-color: #ffc9287f;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2rem 1rem;
  border: 1px solid #e1e1e1;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

// Título
const Title = styled.h3`
  font-size: 2.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60%;
    height: 4px;
    background-color: #3498db;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Texto
const Text = styled.p`
  max-width: 900px;
  margin: 0 auto 1.5rem;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #232727;
  font-family: 'Open Sans', sans-serif;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Informações de contato
const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

// Item de contato
const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  color: #2c3e50;
  transition: transform 0.3s ease-in-out;
  max-width: 300px;
  text-align: center;

  & > i {
    font-size: 3rem;
    color: #3498db;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease-in-out;
  }

  & > p {
    margin: 0.5rem 0;
    font-weight: 500;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &:hover > i {
    color: #2980b9;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    & > i {
      font-size: 2.5rem;
    }
  }
`;

// Telefone
const PhoneLink = styled.a`
  text-decoration: none;
  color: #3498db;
  font-weight: 600;
  font-size: 1.25rem;

  &:hover {
    color: #2980b9;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export default function Sobre() {
  return (
    <Section id="sobre">
      <Title>Clínica Takara Oftalmologia</Title>
      <Text>
        A <strong>Clínica Takara Oftalmologia</strong> tem mais de 30 anos de experiência, oferecendo
        cuidados especializados em saúde ocular. Com uma equipe de profissionais altamente qualificados,
        a clínica oferece tratamentos de ponta em cirurgias refrativas, catarata e doenças oculares.
      </Text>
      <Text>
        Estamos comprometidos com o atendimento humanizado e tecnologia de última geração, sempre
        buscando a melhor solução para nossos pacientes.
      </Text>
      
    </Section>
  );
}
