'use client';

import { useState } from 'react';

interface EmailInputProps {
  label:string;
  name:string;
  sendValue:(value:any) => void;
}

export const EmailInput = ({label, sendValue, name}: EmailInputProps) => {
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