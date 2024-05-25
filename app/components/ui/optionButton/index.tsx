import { useEffect, useState } from 'react';
import './styles.css';

interface OptionButtonProps{
  label:string;
  onSend: (selectedOptions: any[]) => void;
}

export const OptionButton = ({label, onSend}:OptionButtonProps) => {
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const options = [1,2,3,4,5,'+']


  const handleOptionClick = (item: number | string) => {
    if (selectedOptions.includes(item)) {
      setSelectedOptions(selectedOptions.filter((option:any) => option !== item));
    } else {
      setSelectedOptions([...selectedOptions, item]);
    }
  }

  useEffect(() => {
    if(selectedOptions){
      onSend(selectedOptions)
    }
  }, [selectedOptions])

  return(
    <div className="option-button-container">
      {label && <h4>{label}</h4>}
      <div className="options-content">
        {options.map((item, index) => (
          <span
            key={index}
            onClick={() =>  handleOptionClick(item)}
            className={selectedOptions.includes(item) ? 'selected' : ''}
          >{item}</span>
        ))}
      </div>
    </div>
  )
}