/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
import React, { useContext, useEffect, useState } from 'react';
import { TimerContext } from '../context/TimerProvider';
import style from '../styles/Buttons.module.css';
import beep from '../audio/Button sound effect.ogg';
import bombPlanted from '../audio/Bomb Has Been Planted - Sound Effect  CS:GO.mp3';
import explosion from '../audio/Bomb C4 Explode Sound Effect [CS:GO].mp3';

const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const beepSound = new Audio(beep);
const bombHasBeenPlanted = new Audio(bombPlanted);
const explosionSound = new Audio(explosion);

export default function BombButtons() {
  const {
    time, setTime, display, setDisplay,
  } = useContext(TimerContext);
  const timeArray = time.split('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = ({ target: { value } }) => {
    for (let x = 0; x <= 4; x += 1) {
      timeArray[x] = timeArray[x + 1];
    }
    timeArray[5] = value;
    setTime(timeArray.join(''));
    beepSound.play();
  };

  useEffect(() => {
    setDisplay(`${time.substr(0, 2)}:${time.substr(2, 2)}:${time.substr(4, 2)}`);
  }, [time]);

  const startBomb = () => {
    bombHasBeenPlanted.play();
    setIsDisabled(true);
    let secs = Number(display.split(':')[2]);
    let mins = Number(display.split(':')[1]);
    let hours = Number(display.split(':')[0]);

    if (secs >= 60) {
      secs %= 60;
      mins += 1;
    }
    if (mins >= 60) {
      mins %= 60;
      hours += 1;
    }

    const timer = setInterval(() => {
      const numbers = [hours, mins, secs];
      for (const x in numbers) {
        if (String(numbers[x]).length < 2) {
          numbers[x] = `0${numbers[x]}`;
        }
      }
      setDisplay(`${numbers[0]}:${numbers[1]}:${numbers[2]}`);

      secs -= 1;

      if (mins <= 0 && hours !== 0) {
        hours -= 1;
        mins = 59;
        secs = 59;
      }

      if (secs < 0 && mins !== 0) {
        mins -= 1;
        secs = 59;
      }

      if (hours === 0 && mins === 0 && secs < 0) {
        clearInterval(timer);
        setTime('000000');
        setIsDisabled(false);
        explosionSound.play();
      }
    }, 1000);
  };

  return (
    <section className={style.buttons}>
      {buttons.map((x) => <button key={x} disabled={isDisabled} onClick={handleClick} value={x} type="button">{x}</button>)}
      <button type="button" disabled={isDisabled} onClick={startBomb}>START</button>
    </section>
  );
}
