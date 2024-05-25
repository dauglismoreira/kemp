'use client';

import { useState } from 'react';
import { AnimateArrow } from '../animateArrow';
import './styles.css';

export const LinkBox = ({data}: any) => {
  const [active, setActive] = useState(false)
  return(
    <div
      className="box"
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <h3>{data.title}</h3>
      <div className="cta">
        <span>Saiba mais</span>
        <AnimateArrow color="bg-darkBlue" active={active}/>
      </div>
    </div>
  )
}