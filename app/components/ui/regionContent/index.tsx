'use client';

import { useState } from 'react';
import './styles.css';

export const RegionContent = ({data}:any) => {
  const [selectedRegion, setSelectedRegion] = useState(1)

  return(
    <div className="content">
      <div className="side-bar">
        <h3>{data.find((items:any) => items.id === selectedRegion).title}</h3>
      </div>
      <div className="body">
        <div className="menu">
          {data.map((item:any, index:number) => (
            <span
              key={index}
              onClick={() => setSelectedRegion(item.id)}
              className={`${selectedRegion === item.id ? 'active' : ''}`}
            >{item.title}</span>
          ))}
        </div>
        <div className="text" dangerouslySetInnerHTML={{ __html: data.find((items:any) => items.id === selectedRegion).text }}></div>
      </div>
    </div>
  )
}