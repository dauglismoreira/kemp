import './styles.css';

interface SectionTitleProps {
  text:string;
}

export const SectionTitle = ({text}: SectionTitleProps) => {
  return(
    <div className="title-container">
      <h2>{text}</h2>
    </div>
  )
}