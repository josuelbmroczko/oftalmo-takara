// src/components/Depoimentos.jsx
import { useEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #ecf0f3, #f7f9fb);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  font-family: 'Playfair Display', serif;
`;

const WidgetWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .elfsight-app-eb1a93f4-ed4d-4391-a70a-b46149316c89 {
    width: 100%;
  }
`;

export default function Depoimentos() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Section id="depoimentos">
      <Title>O que dizem os pacientes</Title>
      <WidgetWrapper>
        <div className="elfsight-app-eb1a93f4-ed4d-4391-a70a-b46149316c89" data-elfsight-app-lazy></div>
      </WidgetWrapper>
    </Section>
  );
}
