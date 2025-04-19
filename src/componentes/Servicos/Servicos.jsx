// src/components/Servicos.jsx
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #0a3d62;
  margin-bottom: 3rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    background: #f0faff;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.4rem;
  color: #0077b6;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

export default function Servicos() {
  return (
    <Section id="servicos">
      <Title>Serviços Oftalmológicos</Title>
      <Grid>
        <Card>
          <CardTitle>Consulta de Rotina</CardTitle>
          <CardText>
            Avaliação completa da saúde ocular, com equipamentos de última geração.
          </CardText>
        </Card>
        <Card>
          <CardTitle>Cirurgia de Catarata</CardTitle>
          <CardText>
            Procedimentos modernos com lentes intraoculares de alta performance.
          </CardText>
        </Card>
        <Card>
          <CardTitle>Cirurgia Refrativa</CardTitle>
          <CardText>
            Correção a laser de miopia, hipermetropia e astigmatismo com técnicas avançadas.
          </CardText>
        </Card>
      </Grid>
    </Section>
  );
}
