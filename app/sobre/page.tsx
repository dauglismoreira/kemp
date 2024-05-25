import './styles.css';

export default function About (){

  const data = [
    {
      title:'Qualidade',
      text:'Primor e atenção especial a cada obra e serviço prestado.'
    },
    {
      title:'SEGURANÇA',
      text:'Construir com segurança é o pré-requisito da KEMP.'
    },
    {
      title:'AGILIDADE',
      text:'Entrega dentro do prazo.'
    },
    {
      title:'GARANTIA',
      text:'Credibilidade e confiança, com a certeza de entrega da obra.'
    },
    {
      title:'ÉTICA',
      text:'Respeito às pessoas e ao meio ambiente.'
    },
    {
      title:'PARCERIA',
      text:'A KEMP opera com os melhores fornecedores do mercado da Construção Civil.'
    },
    {
      title:'COMPETÊNCIA',
      text:'Excelente resultado final de acabamento sem impactar no custo da obra.'
    },
    {
      title:'MODERNIDADE',
      text:'Utilização das mais avançadas tecnologias existentes no setor.'
    },
  ]

  const data2 = [
    {
      title:'Missão',
      text:'Atuar competitivamente no setor da Construção Civil, construindo com agilidade, qualidade e solidez, valorizando os colaboradores, preservando o meio ambiente e assegurando a satisfação dos clientes.'
    },
    {
      title:'Visão',
      text:'Ser reconhecida como uma das empresas líderes do setor, com atuação focada em agilidade, qualidade e profissionalismo.'
    },
    {
      title:'Política de Entrega',
      text:'Construir obras com qualidade e solidez, valorizando nossos colaboradores, promovendo a satisfação dos Clientes e buscando a melhoria contínua do Sistema de Gestão da Qualidade'
    },
    {
      title:'Objetivos',
      text:`- Entregar os imóveis de acordo com os projetos.\n- Melhorar a segurança e a satisfação dos colaboradores.\n- Garantir a satisfação dos clientes.\n- Aperfeiçoar continuamente os processos.`
    },
  ]

  return(
    <div className="about-banner">
      <div className="about-section-1">
        <div className="container">
          <h1>A Kemp promete e faz.</h1>
        </div>
      </div>
      <div className="about-section-2 desktop">
        <div className="container">
          <span>Desde 1999</span>
        </div>
      </div>
      <div className="about-section-3">
        <img src="/placeholder_light.jpg"/>
      </div>
      <div className="about-section-2 mobile">
        <div className="container">
          <span>Desde 1999</span>
        </div>
      </div>

      <div className="content">
        <h2>Sobre</h2>
        <p>A <b>Kemp Engenharia</b> é uma empresa de construção civil com atuação no segmento de incorporações imobiliárias e está altamente capacitada a executar as mais diversas obras e serviços. Atuamos com a mesma eficiência em todos os tipos de construção, com garantia de entrega no prazo acordado. Trabalhando sempre com fornecedores de alto padrão, fazemos o acompanhamento minucioso de cada etapa das obras que realizamos, assegurando segurança e qualidade.</p>

        <div className="video-container"></div>

        <h3>Nossa história</h3>
        <p>A <b>Kemp Engenharia</b> está  presente no mercado capixaba há mais de 24 anos. Durante sua trajetória vem desenvolvendo parcerias estratégicas que aumentam suas vantagens competitivas e uma visão de longo prazo que permite a incorporação permanente de novas tecnologias. Hoje, mais do que uma construtora, a Kemp é um centro gerador de soluções integradas de engenharia a serviço dos clientes que exigem qualidade e excelência. Encontra-se inteiramente adaptada às novas tendências do mercado.</p>
        <p>A tecnologia de construção evoluiu e a empresa sempre se antecipou às novidades. O que a marca Kemp traz de melhor ao mercado é a filosofia empresarial de que a ética e o respeito às pessoas e ao ambiente são tão importantes quanto know-how, máquinas, componentes e concreto. Uma obra é um compromisso de transparência e de responsabilidade!</p>

        <h3>Nossos valores</h3>
        <span>O principal valor da Kemp Engenharia é atender com excelência seus clientes.</span>

        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <span></span>
              <div className="items">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="slogan">
          <img src="/mini_logo.png"/>
          <h2>A Kemp promete e faz.</h2>
        </div>
      </div>
      <div className="content-2">
        <div className="container">
          {data2.map((item, index) => (
            <div key={index} className="box">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}