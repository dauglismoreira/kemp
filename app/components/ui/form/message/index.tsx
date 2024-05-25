'use client';

import { useState } from 'react';

interface MessageInputProps {
  label:string;
  name:string;
  sendValue:(value:any) => void;
  placeholder?:string
}

export const MessageInput = ({label, sendValue, name, placeholder}: MessageInputProps) => {
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
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleValue(e.target.value)}
        rows={6}
      ></textarea>
    </fieldset>
  )
}