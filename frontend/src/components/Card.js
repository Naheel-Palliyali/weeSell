import React from 'react'
import { StyledCard } from './styles/Card.style'
import { Container } from './styles/Container.style'
import { Button } from './styles/Button.style'

const Card = () => {
  return (
    <StyledCard>
      <Container margin='34px 34px'>
        <Button small></Button>
        <Button small></Button>
      </Container>
    </StyledCard>
  )
}

export default Card
