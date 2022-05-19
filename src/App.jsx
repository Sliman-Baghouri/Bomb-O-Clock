import React from 'react';
import './App.css';
import Bomb from './components/Bomb';
import BombButtons from './components/BombButtons';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <main className="App">
        <Bomb />
        <BombButtons />
      </main>
      <Footer />
    </>
  );
}
