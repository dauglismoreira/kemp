import { useEffect, useRef, useState } from 'react';
import './styles.css';

interface ProgressBarProps{
  label:string;
  value:number;
  size:string;
  sizeValue:string;
  height:string;
}

export const ProgressBar = ({label, value, size, sizeValue, height}: ProgressBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (progressBarRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return(
    <div className="progress-bar-container" ref={progressBarRef}>
      <h5 className={size}>{label}</h5>
      <p className={sizeValue}>{value}%</p>
      <div className={`progress-bar ${height}`}>
        <span
          className={height}
          style={{ width: isVisible ? `${value}%` : '0%', transition: 'width 2s' }}
        ></span>
      </div>
    </div>
  )
}