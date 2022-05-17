/* eslint-disable prefer-destructuring */
import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerProvider';
import style from '../styles/Buttons.module.css';

const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, 'START'];

export default function BombButtons() {
  const { time, setTime } = useContext(TimerContext);
  const timeArray = time.split('');

  const handleClick = ({ target: { value } }) => {
    if (value !== 'START') {
      for (let x = 0; x <= 4; x += 1) {
        timeArray[x] = timeArray[x + 1];
      }
      timeArray[5] = value;
      setTime(timeArray.join(''));
    }
  };

  return (
    <section className={style.buttons}>
      {buttons.map((x) => <button key={x} onClick={handleClick} value={x} type="button">{x}</button>)}
    </section>
  );
}
