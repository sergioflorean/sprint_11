import { useState } from 'react'
import './App.css'
import Header from './Header.tsx'
import Main from './Main.tsx'
import Animal from './Animal.tsx'


function App() {
  

  return (
    <>
      <Header />
      <Main />
      <Animal selectedAnimal="cat" />
      <Animal selectedAnimal="dog" />

    </>
  )
}

export default App
