import styled from "styled-components";
import { useState } from "react";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #064273;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    background-color: #ffffff;
    width: 100%;
    padding: 2rem 1rem;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    gap: 1rem;
  }

  &.active {
    display: flex;
  }
`;

const Link = styled.a`
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  
  &:hover {
    color: #064273;
    transform: scale(1.05);
  }
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 22px;
  width: 25px;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  
  @media (max-width: 768px) {
    display: flex;
  }

  div {
    background-color: #064273;
    height: 3px;
    width: 100%;
    transition: 0.3s;
  }

  &.active div:nth-child(1) {
    transform: rotate(45deg);
    position: absolute;
    top: 10px;
  }

  &.active div:nth-child(2) {
    opacity: 0;
  }

  &.active div:nth-child(3) {
    transform: rotate(-45deg);
    position: absolute;
    top: 10px;
  }
`;

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <HeaderContainer>
      <Logo>Clínica Takara</Logo>
      <Nav className={menuActive ? 'active' : ''}>
  <Link href="#sobre" onClick={() => setMenuActive(false)}>Sobre</Link>
  <Link href="#servicos" onClick={() => setMenuActive(false)}>Serviços</Link>
  <Link href="#depoimentos" onClick={() => setMenuActive(false)}>Depoimentos</Link>
  <Link href="#galeria" onClick={() => setMenuActive(false)}>Galeria</Link>
  <Link href="#contato" onClick={() => setMenuActive(false)}>Contato</Link>
</Nav>

      <BurgerMenu onClick={toggleMenu} className={menuActive ? 'active' : ''}>
        <div />
        <div />
        <div />
      </BurgerMenu>
    </HeaderContainer>
  );
}
