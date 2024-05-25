'use client';

import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';

interface ReasonInputProps {
  label:string;
  name:string;
  sendValue:(value:any) => void;
}

export const ReasonInput = ({label, sendValue, name}: ReasonInputProps) => {
  const [value, setValue] = useState('')

  const handleValue = (e:string) => {
    setValue(e)
    sendValue({
      value:e,
      name:name
    })
  }

  return(
    <div className="reason-options">
      <label>{label}</label>
      <div className="button-container">
          <div
            className={`custom-button ${value === 'Quero adquirir um imóvel' ? 'selected' : ''}`}
            onClick={() => handleValue('Quero adquirir um imóvel')}
          >Quero adquirir um imóvel</div>
          <div
            className={`custom-button ${value === 'Outro' ? 'selected' : ''}`}
            onClick={() => handleValue('Outro')}
          >Outro</div>
      </div>
    </div>
  )
}