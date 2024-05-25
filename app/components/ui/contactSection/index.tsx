import './styles.css';

export const ContactSection = () => {

  const data = [
    {
      title:'Sede Administrativa Vendas',
      address:'Rua Itaboraí, 326, Ed. Ilhas do Pacífico, loja 13, Praia de Itaparica, Vila Velha – ES',
      phone:'(27) 3038-0888 / (27) 99821-0947'
    },
    {
      title:'Central de Vendas',
      address:'Rodovia do Sol, 1870, Praia de Itaparica, Vila Velha – ES',
      phone:'(27) 3038-0888 / (27) 99821-0947'
    },
    {
      title:'Estande de vendas atendimento ao parceiro',
      address:'Avenida Saturnino Rangel Mauro, 1955, Praia de Itaparica, Vila Velha - ES',
      phone:'(27) 99943-3106'
    },
  ]

  return(
    <div className='ContactSection'>
      <div className="title">
        <h2>Venha até a Kemp</h2>
      </div>
      <div className="content">
        {data.map((item, index) => (
          <div key={index} className="box">
            <h3>{item.title}</h3>
            <p>{item.address}</p>
            <h5 className="mobile">{item.phone.replace(/\s*\/\s*/g, '\n')}</h5>
            <h5 className="desktop">{item.phone}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}