import { SendCV } from '../components/ui/sendCV';
import './styles.css';

export default function KempWork(){

  const data = [
    {
      job:'Técnico de construção civil',
      local:'Vila Velha - ES'
    },
    {
      job:'Auxiliar de construção civil',
      local:'Vila Velha - ES'
    },
    {
      job:'Ajudante de construção civil',
      local:'Vila Velha - ES'
    },
    {
      job:'Chefe de almoxarifado',
      local:'Vila Velha - ES'
    },
    {
      job:'Consultor comercial',
      local:'Vila Velha - ES'
    },
  ]

  return(
    <div className="work-container">
      <h1>TRABALHE NA KEMP</h1>
      <div className="content">
        <div className="work-body">
          <p>Estamos sempre em busca de talentos que compartilhem da nossa visão e desejem crescer junto conosco. Se você está buscando uma oportunidade de contribuir com suas habilidades em um ambiente que valoriza a inovação e o trabalho em equipe, você está no lugar certo.</p>
          <h5>Não perca a chance de fazer parte de nossa equipe. Envie seu currículo hoje!</h5>
          <div className="desktop-form"><SendCV title="ENVIE SUA MENSAGEM E DEIXE SEU CURRICULO"/></div>
        </div>
        <div className="work-sidebar">
          <h3>Vagas em aberto</h3>
          {data.map((item, index) => (
            <div key={index} className="job-item">
              <h5>{item.job}</h5>
              <p>{item.local}</p>
            </div>
          ))}
        </div>
        <div className="mobile-form"><SendCV title="ENVIE SUA MENSAGEM E DEIXE SEU CURRICULO"/></div>
      </div>
  </div>
  )
}