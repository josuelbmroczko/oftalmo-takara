import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;

  @media (max-width: 500px) {
    right: 10px;
  }
`;

const Button = styled.a`
  background-color: #25D366;
  color: white;
  padding: 10px 16px;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const WhatsappButtons = () => {
  const contatos = [
    {
      label: 'Ribeirão Pires',
      number: '551148286908',
      message: 'Olá! Vim pelo site.'
    },
    {
      label: 'Diadema',
      number: '551140661317',
      message: 'Olá! Vim pelo site.'
    }
  ];

  return (
    <Container>
      {contatos.map((contato, index) => (
        <Button
          key={index}
          href={`https://wa.me/${contato.number}?text=${encodeURIComponent(contato.message)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
          {contato.label}
        </Button>
      ))}
    </Container>
  );
};

export default WhatsappButtons;
