import './styles.css';

interface PrimaryButtonProps{
  extraClass:string;
  text:string;
  action:() => void;
}

export const PrimaryButton = ({extraClass, text, action}: PrimaryButtonProps) => {
  return(
    <button
      onClick={action}
      className={`primary-button ${extraClass ? extraClass : ''}`}
    >{text}</button>
  )
}