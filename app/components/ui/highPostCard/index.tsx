'use client';

import { useState } from 'react';
import { AnimateArrow } from '../animateArrow';
import './styles.css';
import Link from 'next/link';

export const HighPostCard = ({data}: any) => {
  const [animateArrow, setAnimateArrow] = useState(false)

  return(
    <Link href="/blog/1">
    <div
      className="high-post-card"
      onMouseOver={() => setAnimateArrow(true)}
      onMouseLeave={() => setAnimateArrow(false)}
    >
      <div className="high-post-card-info">
        <div className="high-post-card-title">
          <small>{data.date}</small>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
        <div className="high-post-card-cta">
          <button>saiba mais  <AnimateArrow color="bg-darkBlue" active={animateArrow}/></button>
        </div>
      </div>
      <img src={data.photo}/>
    </div>
    </Link>
  )
} 