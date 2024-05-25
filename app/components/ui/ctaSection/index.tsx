'use client';

import { useState } from 'react';
import './styles.css';
import { AnimateArrow } from '../animateArrow';

export const CtaSection = () => {
  const [animateArrow, setAnimateArrow] = useState(false)

  return(
    <div
      className="cat-section"
      onMouseOver={() => setAnimateArrow(true)}
      onMouseLeave={() => setAnimateArrow(false)}
    >
      <div className="cta-container">
        <div className="cta">
          <h5>Tenho interesse</h5>
          <AnimateArrow color="bg-darkBlue" active={animateArrow}/>
        </div>
        <div className="cta-text">Invista<br></br> na região</div>
      </div>
    </div>
  )
}