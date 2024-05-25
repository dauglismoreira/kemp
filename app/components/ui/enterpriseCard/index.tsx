'use client';

import { useState } from 'react';
import { AnimateArrow } from '../animateArrow';
import './styles.css';
import Link from 'next/link';

export const EnterpriseCard = (data: any) => {
  const [animateArrow, setAnimateArrow] = useState(false)

  return(
    <Link href="/empreendimentos/1">
    <div
      className="enterpriseCard"
      onMouseOver={() => setAnimateArrow(true)}
      onMouseLeave={() => setAnimateArrow(false)}
    >
      <img src={'/placeholder_dark.jpg'}/>
      <div className="enterpriseInfo">
        <div className="city">
          <h3>{data.data.city}</h3>
        </div>
        <div className="title">
          <h2>{data.data.title}</h2>
        </div>
        <AnimateArrow color="bg-darkBlue" active={animateArrow}/>
      </div>
    </div>
    </Link>
  )
}