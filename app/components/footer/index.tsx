import Link from 'next/link';
import './styles.css';

export const Footer = () => {

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
    <div className="footer">
      <div className="content">
        <div className="signature">
          <Link href="/"><img src={'/LOGO-KEMP-LIGHT.png'}/></Link>
          <h4>A Kemp promete e faz</h4>
        </div>
        <div className="contact-menu">
          <div className="contact-container">
            {data.map((item, index) => (
              <div key={index} className="box">
                <h3>{item.title}</h3>
                <p>{item.address}</p>
                <h5 className="mobile">{item.phone.replace(/\s*\/\s*/g, '\n')}</h5>
                <h5 className="desktop">{item.phone}</h5>
              </div>
            ))}
          </div>
          <div className="menu-container">
            <div className="menu">
              <h3>Redes Sociais</h3>
              <ul className="list social">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
              </ul>
            </div>
            <div className="menu">
              <h3>Mapa do Site</h3>
              <ul className="list">
                <li><Link href="/empreendimentos">Empreendimentos</Link></li>
                <li><Link href="/sobre">Sobre a Kemp</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/fale-conosco">Fale conosco</Link></li>
                <li className="mobile"><Link href="/central-de-vendas">Central de vendas</Link></li>
                <li className="mobile"><Link href="/consultores">Nossos consultores</Link></li>
                <li className="mobile"><Link href="/regiao">Conheça a região</Link></li>
                <li className="mobile"><Link href="/investimento">Sou investidor</Link></li>
              </ul>
            </div>
            <div className="menu desktop">
              <h3 className="h-5"></h3>
              <ul className="list">
                <li><Link href="/central-de-vendas">Central de vendas</Link></li>
                <li><Link href="/consultores">Nossos consultores</Link></li>
                <li><Link href="/regiao">Conheça a região</Link></li>
                <li><Link href="/investimento">Sou investidor</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="policy-container">
        <div className="policy">
          <div className="fix-margin"></div>
          <div className="policy-content">
            <div className="policy-links">
              <span>Política de Privacidade</span>
              <span>Termos de Uso</span>
            </div>
            <div className="right">
              <span>Desenvolvido por impacte</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )  
}