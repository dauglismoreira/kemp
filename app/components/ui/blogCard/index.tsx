'use client';

import { useState } from 'react';
import './styles.css';
import { AnimateArrow } from '../animateArrow';
import Link from 'next/link';

export const BlogCard = ({data}:any) => {
  const [animateArrow, setAnimateArrow] = useState(false)

  return(
    <Link href='/blog/1'>
      <div
        className="blogCard"
        onMouseOver={() => setAnimateArrow(true)}
        onMouseLeave={() => setAnimateArrow(false)}
      >
        <img src={'/placeholder_dark.jpg'}/>
        <div className="blogInfo">
          <div className="city">
            <h3>{data.city}</h3>
          </div>
          <div className="title">
            <h2>{data.title}</h2>
          </div>
        </div>
        <div className="cta">
          <span>Saiba mais</span>
          <AnimateArrow color="bg-darkBlue" active={animateArrow}/>
        </div>
      </div>
    </Link>
  )
}