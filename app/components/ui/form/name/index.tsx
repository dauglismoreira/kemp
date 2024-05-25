'use client';

import { useState } from 'react';

interface NameInputProps {
  label:string;
  name:string;
  sendValue:(value:any) => void;
}

export const NameInput = ({label, sendValue, name}: NameInputProps) => {
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