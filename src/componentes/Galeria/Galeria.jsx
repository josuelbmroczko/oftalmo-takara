// src/components/Galeria.jsx
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #333;
  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 480px) {
    padding: 0;

  }
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  border-radius: 15px;
  background: #ffffff;
 
  @media (max-width: 768px) {
    height: 350px;  
  }

  @media (max-width: 480px) {
    height: 250px;  
    
  }
`;

export default function Galeria() {
  const imagens = [
    "https://lh3.googleusercontent.com/p/AF1QipPIAeqK2GCEBMW_fjmScrWfC9EpqL9Zm_LPHwAC=s680-w680-h510",
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB95EG6odywiTv78jyZiwaMlwbgYmZUiPnHgMOnFcEa63YpYxzPomUqgbKwh95b3KEjGlVHHhGhtmnQnlNWUcm-vAFGSHRvSDGrRmn5JiYbnDTWI3UmsnExtJEMl2Svx7AD_6NoYyA=s680-w680-h510",
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-5kWCQB0LgB97ER1-CnBzSj0kMECbvNpY8iCoQGFd9n-OVttTJ7qOs4c8VhX-B977JjvhyeKRl2ePzMLSY7J0GtGuemn1LyUJD5ygwFuzAdHaAsjVMofJ1jKesgcXWhpIlauEg=s680-w680-h510",
    // Adicione mais imagens aqui
  ];

  return (
    <Section id="galeria">
      <Title>Nosso Espaço</Title>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect="fade"
      >
        {imagens.map((url, index) => (
          <SwiperSlide key={index}>
            <Img src={url} alt={`Imagem ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
