import React from 'react';
import style from '../styles/Buttons.module.css';

const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, 'START'];

export default function BombButtons() {
  return (
    <section className={style.buttons}>
      {buttons.map((x) => <button type="button">{x}</button>)}
    </section>
  );
}
