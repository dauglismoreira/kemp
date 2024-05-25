'use client';

import { useState } from 'react';
import './styles.css';

export const EnterpriseTypeGallery = ({data}:any) => {
  const [typeSelected, setTypeSelected] = useState(data[0].title || '')

  return(
    <div className="plant-gallery">
      <h3>Plantas</h3>
      <ul className="plant-menu">
        {data.map((item:any, index:number) => (
          <li
            key={index}
            className={`${typeSelected === item.title ? 'active' : ''}`}
            onClick={() => setTypeSelected(item.title)}
          >{item.title}</li>
        ))}
      </ul>
      <select onChange={(e) => setTypeSelected(e.target.value)} className="select-menu desktop">
        {data.map((item:any, index:number) => (
          <option
            key={index}
            value={item.title}
          >{item.title}</option>
        ))}
      </select>
      <div className="plant-content">
        <ul className="plant-detail-list">
          {data.find((item:any) => item.title === typeSelected).items.map((item:any, index:number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="plant-image">
          <img src={data.find((item:any) => item.title === typeSelected).src}/>
        </div>
      </div>

    </div>
  )
}