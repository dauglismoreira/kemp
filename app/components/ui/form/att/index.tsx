'use client';

import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';

interface AttInputProps {
  label:string;
  name:string;
  sendValue:(value:any) => void;
}

export const AttInput = ({label, sendValue, name}: AttInputProps) => {
  const [value, setValue] = useState('')

  const handleValue = (e:string) => {
    setValue(e)
    sendValue({
      value:e,
      name:name
    })
  }

  return(
    <div className="att-options">
      <label className="mb-4">{label}</label>
      <div className="check-container">
        <div
          className={`custom-check ${value === 'Whatsapp' ? 'active' : ''}`}
          onClick={() => handleValue('Whatsapp')}
        >
          <BsCheck />
        </div>
        <label onClick={() => handleValue('Whatsapp')}>Whatsapp</label>
      </div>
      <div className="check-container">
        <div
          className={`custom-check ${value === 'Ligamos para você' ? 'active' : ''}`}
          onClick={() => handleValue('Ligamos para você')}
        >
          <BsCheck />
        </div>
        <label onClick={() => handleValue('Ligamos para você')}>Ligamos para você</label>
      </div>
    </div>
  )
}