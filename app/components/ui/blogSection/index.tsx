import { BlogCard } from '../blogCard';
import { SectionMenu } from '../sectionMenu';
import { SectionTitle } from '../sectionTitle';
import './styles.css';

export const BlogSection = () => {

  const data = [
    {
      label:'Veja tudo',
      link:'#'
    },
  ]

  const cardsMock = [
    {
      photo:'',
      link:'#',
      city:'Fev 20, 2024',
      title:'Como comprar um apartamento na planta com segurança.'
    },
    {
      photo:'',
      link:'#',
      city:'Fev 20, 2024',
      title:'Conheça o Espirito Santo'
    },
    {
      photo:'',
      link:'#',
      city:'Fev 20, 2024',
      title:'5 motivos para você investir no Ilha de Malta da Kemp.'
    },
  ]

  return(
    <section id='blog' className="section">
      <div className="container">
        <SectionTitle text={'Blog'}/>
        <SectionMenu data={data}/>
        <div className="content">
          {cardsMock.map((item, index) => (
            <BlogCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}