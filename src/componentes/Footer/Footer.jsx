// src/components/Footer.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 6rem 0;
  background-color: #f4f4f4;
  position: relative;
  border-top: 1px solid #e0e0e0;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2.8rem;
  color: #34495e;
  font-weight: 700;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
 
`;

const LogoSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  img {
    height: 70px;
    max-width: 200px;
    object-fit: contain;
    filter: grayscale(100%);
    transition: all 0.3s ease-in-out;

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      height: 55px;
    }

    @media (max-width: 480px) {
      height: 45px;
    }
  }
`;

const InfoSection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 2.5rem;
 
  color: #636363;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  p {
    margin: 1rem 0;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  a {
    color: #f39c12;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #e67e22;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #7f8c8d;
  
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;

  p {
    margin: 0;
  }
`;


const logos = [
  "https://ameplansaude.com.br/wp-content/uploads/2021/10/Logo-Ameplan-orginal-02-1536x365.png",
  "https://wwws.bradescosaude.com.br/PCBS-Irpf/images/logo_saude.gif",
  "https://buscaplanodesaude.com/wp-content/uploads/2022/07/plano-de-saude-notredame.png",
  "https://planos.amilcuidadocerto.com.br/images/logo-amil.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNUkmK7VJK7YuRmRUTSBUGgN2adPj7yy1Tw&s",
  "https://portosaudeonline24h.com.br/wp-content/uploads/2021/06/porto-seguro-plano-saude-rotta-seguros-saude-logo.jpg",
  "https://ncdn0.infojobs.com.br/logos/Company_Evaluation/273388.jpg",
  "https://portal.sulamericaseguros.com.br/responsivo/tacomtudo/img/logo-sulamerica.png",
  "https://medicaltecsaude.com.br/assets/images/logo/medicaltec_logo_dark.png",
  "https://cdn.nsite.com.br/imgcache/4058/900x/uploads/4058/convenios/cma/MEDISERVICE.png.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyR4GoOYq6ENPTuKXEBPlvBIl9zmRLtKwQA&s",
  "https://www.hospitaldeolhosimperatriz.com.br/upload/service/w1YhtRqE7Ro28dEKevqhtTIbxTkRhxtFflzlavZy.png",
];

export default function Footer() {
  return (
    <FooterWrapper>
      {/* Carrossel de Logos */}
      <Title>Planos Aceitos</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <LogoSlide>
              <img src={logo} alt={`Plano de saúde ${index + 1}`} />
            </LogoSlide>
          </SwiperSlide>
        ))}
      </Swiper>

      

      {/* Copyright */}
      <CopyrightSection>
        <p>&copy; 2025 Todos os direitos reservados | Clínica Takara Oftalmologia</p>
      </CopyrightSection>
    </FooterWrapper>
  );
}
