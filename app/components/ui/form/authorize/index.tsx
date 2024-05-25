import Link from 'next/link';
import { useState } from 'react';

interface AuthorizeInputProps {
  label:string;
  name:string;
  sendValue:(value:any) => void;
}

export const AuthorizeInput = ({label, sendValue, name}: AuthorizeInputProps) => {
  const [value, setValue] = useState('')

  const handleValue = (e:string) => {
    setValue(e)
    sendValue({
      value:e,
      name:name
    })
  }
  
  return(
    <div className="authorize-check">
      <input id={name} name={name} type="checkbox"></input>
      <label htmlFor={name}>Autorizo que os meus dados sejam transferido para a Kemp Engenharia, para efeitos de marketing, estudo de mercado e publicidade e que sejam recolhidos, processados e utilizados para esses efeitos conforme descrito na <Link href="#">Declaração de Privacidade.</Link></label>
    </div>
  )
}