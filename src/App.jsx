/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.css';
import Bomb from './components/Bomb';
import BombButtons from './components/BombButtons';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <header className="header">
        <h1>
          🧨 Bomb O'Clock ⏱️
        </h1>
      </header>
      <main className="App">
        <Bomb />
        <BombButtons />
      </main>
      <Footer />
    </>
  );
}
