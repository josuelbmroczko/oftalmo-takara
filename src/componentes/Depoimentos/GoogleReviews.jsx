import { useEffect } from "react";
import styled from "styled-components";

// Container estilizado para centralizar e ajustar o layout
const ReviewsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f0f4f8;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  .elfsight-app-eb1a93f4-ed4d-4391-a70a-b46149316c89 {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <ReviewsContainer id="depoimentos">
      <h3>O que dizem os pacientes</h3>
      <div className="elfsight-app-eb1a93f4-ed4d-4391-a70a-b46149316c89" data-elfsight-app-lazy></div>
    </ReviewsContainer>
  );
}
