import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerProvider';
import timerBomb from '../images/timer-bomb.png';
import style from '../styles/Bomb.module.css';

export default function Bomb() {
  const { time } = useContext(TimerContext);
  const display = `${time.substr(0, 2)}:${time.substr(2, 2)}:${time.substr(4, 2)}`;

  return (
    <section className={style.bomb}>
      <img
        src={timerBomb}
        alt="Dynamite with timer."
      />
      <div className={style.reflex} />
      <div className={style.sevenSeg}>
        <p>
          {
            display
          }
        </p>
      </div>
    </section>
  );
}
