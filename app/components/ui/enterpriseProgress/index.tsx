'use client';

import { ProgressBar } from '../progressBar';
import { ProgressSwiperGallery } from './gallery';
import './styles.css';

export const EnterpriseProgress = ({data}:any) => {
  return(
    <div className="enterprise-progress-container">
      <div className="enterprise-progress-content">
        <h3>Andamento da obra</h3>

        <div className="total-progress">
          <ProgressBar label="Total da Obra" value={98} size="text-xl" sizeValue="text-base lg:text-2xl" height="h-1"/>
        </div>
        <div className="progress-list">
          {data.progress.map((item:any, index:number) => (
            <ProgressBar key={index} label={item.label} value={item.value} size="text-base lg:text-lg" sizeValue="text-xl" height="h-1"/>
          ))}
        </div>
      </div>

      <div className="enterprise-progress-photos">
        <div className="enterprise-progress-title">
          <h3>Fotos da obra</h3>
          <h5>Janeiro 2024</h5>
        </div>
        
        <ProgressSwiperGallery data={data}/>

        <div className="h-[160px] bg-white w-full relative -z-10 -mt-52"></div>
      </div>
    </div>
  )
}