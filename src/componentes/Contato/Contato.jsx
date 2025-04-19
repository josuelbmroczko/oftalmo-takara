import { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f9f9f9, #e0e7ff);
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h3`
  font-size: 2.5rem;
  color: #2c3e50;
  font-family: 'Playfair Display', serif;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Form = styled.form`
  max-width: 600px;
  background: #ffffff;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border 0.2s;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  resize: vertical;
  font-size: 1rem;
  min-height: 120px;
  transition: border 0.2s;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: linear-gradient(135deg, #4338ca, #4f46e5);
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const PhoneItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  font-size: 1.1rem;
  color: #1f2937;
  background: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    background: #f0f4ff;
    color: #4f46e5;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    flex-direction: column;
    text-align: center;
  }
`;

export default function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send("service_6n3k3e6", "template_zdv04fr", templateParams, "eb6YouwGZ_PxGm0rD")
      .then((response) => {
        alert("Email enviado com sucesso!");
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        alert("Erro ao enviar email. Por favor, tente novamente mais tarde.");
      });
  }

  return (
    <Section id="contato">
      <Title>Entre em Contato</Title>
      <Form onSubmit={sendEmail}>
        <Input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder="Sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit">Enviar mensagem</Button>
      </Form>

      <ContactInfo>
        <PhoneItem href="tel:+551140661317">
          <FaPhoneAlt /> Consultório Diadema - Piraporinha: (11) 4066-1317
        </PhoneItem>
        <PhoneItem href="tel:+551148286908">
          <FaPhoneAlt /> Consultório Ribeirão Pires: (11) 4828-6908
        </PhoneItem>
      </ContactInfo>
    </Section>
  );
}
