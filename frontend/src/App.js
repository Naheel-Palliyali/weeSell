import React from 'react'
import Header from './components/Header'
import GlobalStyle from './components/styles/GlobalStyle.style'
import Banner from './components/Banner'
import HomeScreen from './components/HomeScreen'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <HomeScreen />
    </>
  )
}

export default App
