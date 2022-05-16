import React from 'react';
import timerBomb from '../images/timer-bomb.png';
import style from '../styles/Bomb.module.css';

export default function Bomb() {
  return (
    <div className={style.bomb}>
      <img
        src={timerBomb}
        alt="Dynamite with timer."
      />
      <div className={style.reflex} />
      <div className={style.sevenSeg}>
        <p>00:00:00</p>
      </div>
    </div>
  );
}
