import { HighPostCard } from '../components/ui/highPostCard';
import { PostCard } from '../components/ui/postCard';
import './styles.css';

export default function Blog(){

  const high = {
    date:'FEV 20, 2024',
    title:'Como comprar um apartamento na planta com segurança.',
    text:'Comprar um apartamento na planta com segurança é uma dúvida comum para muitas pessoas. Isso acontece porque tem medo de investir nesse tipo de empreendimento, pois não tem informações práticas sobre como funciona a compra, o financiamento e orientações gerais para fazer a compra do imóvel com segurança.',
    photo:'/placeholder_light.jpg'
  }

  const data = [
    {
      photo:'/placeholder_light.jpg',
      title:'Conheça o Espirito Santo',
      date:'FEV 20, 2024'
    },
    {
      photo:'/placeholder_light.jpg',
      title:'5 motivos para você investir no Ilha de Malta da Kemp.',
      date:'FEV 20, 2024'
    },
    {
      photo:'/placeholder_light.jpg',
      title:'Condomínio pet friendly: como aproveitar ao máximo o espaço pet?',
      date:'FEV 20, 2024'
    },
    {
      photo:'/placeholder_light.jpg',
      title:'Conheça o Espirito Santo',
      date:'FEV 20, 2024'
    },
    {
      photo:'/placeholder_light.jpg',
      title:'5 motivos para você investir no Ilha de Malta da Kemp.',
      date:'FEV 20, 2024'
    },
    {
      photo:'/placeholder_light.jpg',
      title:'Condomínio pet friendly: como aproveitar ao máximo o espaço pet?',
      date:'FEV 20, 2024'
    },
  ]

  return(
    <div className="consultants-container">
      <h1>BLOG</h1>
      <div className="high-post">
        <HighPostCard data={high}/>
      </div>
      <div className="content">
        {data.map((item, index) => (
          <PostCard key={index} data={item}/>
        ))}
      </div>
    </div>
  )
}