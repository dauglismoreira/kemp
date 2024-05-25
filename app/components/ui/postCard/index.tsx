'use client';

import { useState } from 'react';
import { AnimateArrow } from '../animateArrow';
import './styles.css';
import Link from 'next/link';

export const PostCard = ({data}: any) => {
  const [animateArrow, setAnimateArrow] = useState(false)

  return(
    <Link href='/blog/1'>
    <div
      className="post-card"
      onMouseOver={() => setAnimateArrow(true)}
      onMouseLeave={() => setAnimateArrow(false)}
    >
      <img src={data.photo}/>
      <div className="post-card-info">
        <div className="post-card-title">
          <p>{data.date}</p>
          <h2>{data.title}</h2>
        </div>
        <div className="post-card-cta">
          <button>saiba mais  <AnimateArrow color="bg-darkBlue" active={animateArrow}/></button>
        </div>
      </div>
    </div>
    </Link>
  )
} 