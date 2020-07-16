import React from 'react';

import { Container } from './styles';

const News: React.FC = () => {
  return (
      <Container>
        <span>Assuntos do momento em Brasil</span>
        <strong>Programação é o futuro!</strong>
        <span>Confira as principais tecnologias que construirão o amanhã</span>
    </Container>
  );
}

export default News;