'use client';

import { useState } from 'react';
import './styles.css';

interface SectionTitleProps {
  data:{
    label:string;
    link:string;
  }[];
}

export const SectionMenu = ({data}: SectionTitleProps) => {
  const [active, setActive] = useState(0)

  return(
    <div className="menu-container">
      {data.map((item, index) => (
        <li
          className={`${active === index ? 'active' : ''}`}
          key={index}
          onClick={() => setActive(index)}
        >{item.label}</li>
      ))}
    </div>
  )
}