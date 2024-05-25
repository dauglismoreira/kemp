import './styles.css'

interface AnimateArrowProps {
  active?:boolean;
  color?:string;
}

export const AnimateArrow = ({active, color}:AnimateArrowProps ) => {
  return(
    <div className={`animate-arrow ${active ? 'active' : ''}`}>
      <span className={`top ${color ? color : 'bg-white'}`}></span>
      <span className={`line ${color ? color : 'bg-white'} ${active ? 'active' : ''}`}></span>
      <span className={`bottom ${color ? color : 'bg-white'}`}></span>
    </div>
  )
}