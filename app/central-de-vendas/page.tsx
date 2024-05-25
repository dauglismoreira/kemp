import { SellContact } from '../components/ui/sellContact';
import './styles.css';

export default function CenterSell() {

  const data = [
    {
      title:`Sede Administratica\nVendas`,
      address:'Rua Itaboraí, 326, Ed. Ilhas do Pacífico, loja 13, Praia de Itaparica, Vila Velha – ES',
      phones:['(27) 3038-0888','(27) 99821-0947']
    },
    {
      title:`CENTRAL DE VENDAS`,
      address:'Rodovia do Sol, 1870, Praia de Itaparica, Vila Velha – ES',
      phones:['(27) 3038-0888','(27) 99821-0947']
    },
    {
      title:`ESTANDE DE VENDAS\nATENDIMENTO AO PARCEIRO`,
      address:'Avenida Saturnino Rangel Mauro, 1955, Praia de Itaparica, Vila Velha - ES',
      phones:['(27) 99821-0947']
    },
  ]

  return(
    <div className="center-sell-container">
      <div className="center-sell-body">
        <div className="content">
          <h1>Central de vendas</h1>
          <p>Nossa equipe  está pronta para oferecer suporte personalizado, ajudando você a descobrir as melhores opções que atendam às suas expectativas e necessidades. Seja para encontrar o lar dos seus sonhos ou o próximo grande investimento, estamos aqui para orientar você em cada etapa do processo.</p>
          <h5>Estamos pronto para atendê-lo e transformar seus sonhos em realidade!</h5>

          <div className="contact-list">
            {data.map((item, index) => (
              <div key={index} className="contact-item">
                <h3>{item.title}</h3>
                <p>{item.address}</p>
                {item.phones.map((phone, i) => (
                  <h4 key={i}>{phone}</h4>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="center-sell-sidebar">
        <SellContact title="Mande uma mensagem"/>
      </div>
    </div>
  )
}