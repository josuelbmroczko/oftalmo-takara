import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: white;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  z-index: 1000;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    text-decoration: none;
  }
`;

const WhatsappButton = () => {
  const phoneNumber = '551140661317'; // Número com DDD e código do país
  const message = 'Olá! Gostaria de falar com você.';
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button href={link} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={32} />
    </Button>
  );
};

export default WhatsappButton;
