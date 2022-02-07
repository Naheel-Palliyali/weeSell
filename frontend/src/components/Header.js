import React from 'react'
import Navbar from './Navbar'
import { Container, ContainerFloatX } from './styles/Container.style'
import { Brand } from './styles/Brand.style'
import { Button } from './styles/Button.style'

const Header = () => {
  return (
    <>
      <Container margin='32px 0'>
        <Container>
          <Button mr>::</Button>
          <Brand>weesell</Brand>
        </Container>
        <ContainerFloatX center>
          <Navbar></Navbar>
        </ContainerFloatX>
        <Container>
          <p>$Cart</p>
          <Button ml>o</Button>
        </Container>
      </Container>
    </>
  )
}

export default Header
