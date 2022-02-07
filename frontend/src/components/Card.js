import React from 'react'
import { StyledCard } from './styles/Card.style'
import { Container, ContainerFloatX } from './styles/Container.style'
import { Button } from './styles/Button.style'

const Card = () => {
  return (
    <StyledCard>
      <div>
        <Container margin='34px 34px'>
          <Button small></Button>
          <Button small></Button>
        </Container>
        <Container height='25px'>
          <image />
        </Container>
        <ContainerFloatX center width='80%' bottom='24px'>
          <Container center width='100%' height='64px' display='block'>
            <h3>Product title</h3>
            <p style={{ marginTop: '12px' }}>$price</p>
          </Container>
        </ContainerFloatX>
      </div>
    </StyledCard>
  )
}

export default Card
