'use client';

import { useState } from 'react';
import { AnimateArrow } from '../animateArrow';
import './styles.css';
import Link from 'next/link';

export const HighCard = () => {
  const [animateArrowNext, setAnimateArrowNext] = useState(false)

  return(
    <Link href="/empreendimentos/1">
    <div className="high-card-container">
      <div className="image-cover">
        <img alt={''} src={'/placeholder_light.jpg'}/>
      </div>
      <div className="high-card-content">
        <h5>Vila velha/Es</h5>
        <h3>Seu caminho para viver perto do mar.</h3>
        <ul>
          <li>1 ou 2 vagas</li>
          <li>2 ou 3 quartos com até 3 suítes</li>
          <li>Cobertura com 3 suítes</li>
        </ul>
        <div
          className="high-cta"
          onMouseOver={() => setAnimateArrowNext(true)}
          onMouseLeave={() => setAnimateArrowNext(false)}
        >
          <span>Ilha de Malta</span>
          <AnimateArrow active={animateArrowNext}/>
        </div>
      </div>
    </div>
    </Link>
  )
}