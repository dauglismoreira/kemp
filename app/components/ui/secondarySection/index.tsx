import { EnterpriseCard } from '../enterpriseCard';
import { SectionMenu } from '../sectionMenu';
import { SectionTitle } from '../sectionTitle';
import './styles.css';

export const SecondarySection = () => {

  const data = [
    {
      label:'Todos',
      link:'#'
    },
    {
      label:'Breve lançamentos',
      link:'#'
    },
    {
      label:'Em obra',
      link:'#'
    },
    {
      label:'Pronto para morar',
      link:'#'
    },
  ]

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
    <section id="secondary" className="section">
      <div className="container">
        <SectionTitle text={'Empreendimentos'}/>
        <SectionMenu data={data}/>
        <div className="content">
          {cardsMock.map((item:any, index:number) => (
            <EnterpriseCard key={index} data={item}/>
          ))}
        </div>
      </div>
    </section>
  )
}