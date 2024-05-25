import { EnterpriseCard } from '../enterpriseCard';
import './styles.css';

interface RelatedEnterpriseProps {
  title:string;
}

export const RelatedEnterprise = ({title}: RelatedEnterpriseProps) => {
  const cardsMock = [
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Murano'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Malta'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Mykonos'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Kiribati'
    },
  ]

  return(
    <div className="relatedEnterprise">
      <div className="relatedTitle">
        <h3>{title}</h3>
      </div>

      <div className="relatedContent">
          {cardsMock.map((item:any, index:number) => (
            <EnterpriseCard key={index} data={item}/>
          ))}
      </div>
    </div>
  )
}