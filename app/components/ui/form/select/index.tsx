'use client';

import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface SelectInputProps {
  options:any;
  sendValue:(e:any) => void;
  label:string;
  name:string;
}

export const SelectInput = ({label, options, sendValue, name}: SelectInputProps) => {
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
      <div className="select-container">
        <select onChange={(e) => sendValue(e.target.value)}>
          <option value="">{label}</option>
          {options.length > 0 &&
            options.map((item:any, index:number) => (
              <option key={index} value={item.value}>{item.label}</option>
            ))
          }
        </select>
      </div>
    </fieldset>
  )
}