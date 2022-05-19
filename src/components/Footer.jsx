import React from 'react';
import pic from '../images/my-pic.png';
import style from '../styles/Footer.module.css';
import ghLogo from '../images/githubLogo.png';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <img src={pic} alt="Jovane no elevador con óculos escuro." />
      <div>
        <p>Jovane de Castro, Turma 19 - Tribo A</p>
        <a href="https://www.linkedin.com/in/jovanecastro/" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Cadavanaugh" target="_blank" rel="noreferrer">
          <img src={ghLogo} alt="Github" />
        </a>
      </div>
    </footer>
  );
}
