'use client';

import { useState } from 'react';

interface PhoneInputProps {
  label:string;
  name:string;
  sendValue:(value:any) => void;
}

export const PhoneInput = ({label, sendValue, name}: PhoneInputProps) => {
  const [value, setValue] = useState('')

  const handleValue = (e:string) => {
    setValue(e)
    sendValue({
      value:e,
      name:name
    })
  }

  return(
    <fieldset>
      <label>{label}</label>
      <input type="text" value={value} onChange={(e) => handleValue(e.target.value)}></input>
    </fieldset>
  )
}