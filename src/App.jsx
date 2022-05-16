import React from 'react';
import './App.css';
import Bomb from './components/Bomb';
import BombButtons from './components/BombButtons';

export default function App() {
  return (
    <div className="App">
      <Bomb />
      <BombButtons />
    </div>
  );
}
