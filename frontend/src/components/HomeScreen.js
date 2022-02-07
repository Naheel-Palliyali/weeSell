import React from 'react'
import Card from './Card'
import { Container, ContainerFloatX } from './styles/Container.style'

const HomeScreen = () => {
  return (
    <>
      <Container margin='120px 120px 32px'>
        <h4>Breadcrumbs</h4>
        <ContainerFloatX center>
          <h1>Product Details</h1>
        </ContainerFloatX>
        <h4>pages</h4>
      </Container>
      <Container margin='0 48px'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </>
  )
}

export default HomeScreen
