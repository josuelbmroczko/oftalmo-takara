import { useEffect, useState } from "react";
import styled from "styled-components";

// Estilização principal
const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #FFC928, #f7f9fb);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  font-family: 'Playfair Display', serif;
`;

const WidgetWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

// Estilo dos comentários manuais
const FallbackReviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const ReviewCard = styled.div`
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  text-align: left;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background: #dfe6e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ReviewContent = styled.div`
  flex: 1;
`;

const ReviewerName = styled.div`
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.2rem;
`;

const ReviewDate = styled.div`
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
`;

const Stars = styled.div`
  color: #f1c40f;
  margin-bottom: 0.5rem;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #34495e;
  line-height: 1.5;
`;

// Dados dos comentários manuais
const reviews = [
  {
    name: "João Silva",
    initials: "JS",
    date: "Março de 2024",
    rating: 5,
    text: "Atendimento excelente, ambiente acolhedor e equipe muito profissional. Recomendo fortemente!",
  },
  {
    name: "Maria Oliveira",
    initials: "MO",
    date: "Abril de 2024",
    rating: 5,
    text: "Fui muito bem recebida. O local é limpo e organizado. Me senti segura e respeitada.",
  },
  {
    name: "Carlos Mendes",
    initials: "CM",
    date: "Fevereiro de 2024",
    rating: 5,
    text: "Ótimo atendimento! irei retornar sempre",  },
];

// Componente principal
export default function Depoimentos() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    const timeout = setTimeout(() => {
      const widget = document.querySelector(".elfsight-app-eb1a93f4-ed4d-4391-a70a-b46149316c89");
      if (!widget || widget.children.length === 0) {
        setShowFallback(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Section id="depoimentos">
      <Title>O que dizem os pacientes</Title>
      <WidgetWrapper>
        {!showFallback ? (
          <div className="elfsight-app-eb1a93f4-ed4d-4391-a70a-b46149316c89" data-elfsight-app-lazy></div>
        ) : (
          <FallbackReviews>
            {reviews.map((r, i) => (
              <ReviewCard key={i}>
                <Avatar>{r.initials}</Avatar>
                <ReviewContent>
                  <ReviewerName>{r.name}</ReviewerName>
                  <ReviewDate>{r.date}</ReviewDate>
                  <Stars>{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</Stars>
                  <ReviewText>{r.text}</ReviewText>
                </ReviewContent>
              </ReviewCard>
            ))}
          </FallbackReviews>
        )}
      </WidgetWrapper>
    </Section>
  );
}
