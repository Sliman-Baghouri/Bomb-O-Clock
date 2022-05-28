import React, { useContext } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { MdDoNotDisturb } from 'react-icons/md';
import { TimerContext } from '../context/TimerProvider';
import style from '../styles/Header.module.css';

export default function Header() {
  const {opac, setOpac} = useContext(TimerContext);

  const handleSoundOption = () => {
    function muteAudio(){
      const els=document.getElementsByTagName('audio');
      for (var j = 0; j < els.length; j++) {
        els[j].muted = true;
      }
    } 
    muteAudio();
    opac === 100 ? setOpac(0) : setOpac(100);
  }

  return (
    <header className={style.header}>
        <div onClick={handleSoundOption}>
          <AiFillSound />
          <MdDoNotDisturb style={{opacity: opac}} />
        </div>
        <h1>
          🧨 Bomb O'Clock ⏱️
        </h1>
    </header>
  )
}
