import { InvestNow } from '../components/ui/investNow';
import './styles.css';

export default function Invest(){

  const data = [
    {
      label:'A região',
      text:`
      <p>Investir no Espírito Santo é uma decisão estratégica para quem visa aliar luxo e sofisticação a oportunidades únicas de crescimento e desenvolvimento. Este estado brasileiro, conhecido por sua beleza natural deslumbrante e por um ambiente de negócios dinâmico e em constante evolução, oferece um cenário perfeito para investidores de alto padrão que buscam exclusividade, qualidade de vida e retorno financeiro sólido.</p>
      `
    },
    {
      label:'LOCALIZACÃO',
      text:`
      <p>O Espírito Santo se beneficia de uma posição geográfica privilegiada, servindo como um importante corredor logístico para o comércio nacional e internacional. Com um dos portos mais movimentados do Brasil, o estado é um ponto chave para a exportação de produtos, atraindo investimentos em diversos setores da economia.</p>
      `
    },
    {
      label:'ECONOMIA',
      text:`
      <p>Com uma economia forte e diversificada, o Espírito Santo apresenta um ambiente propício para investimentos em setores como petróleo e gás, mineração, siderurgia, celulose e agroindústria. Essa diversidade econômica proporciona estabilidade e abre um leque de oportunidades para investidores visionários.</p>
      `
    },
    {
      label:'QUALIDADE DE VIDA',
      text:`
      <p>O estado é reconhecido por oferecer uma excelente qualidade de vida. Com cidades que combinam modernidade e infraestrutura de ponta com a tranquilidade e o charme de pequenas vilas, o Espírito Santo é um lugar onde o luxo e a natureza coexistem harmoniosamente. Praias paradisíacas, montanhas majestosas e uma rica biodiversidade fazem do estado um destino de vida ou férias ideal para quem busca exclusividade e bem-estar.</p>
      `
    },
    {
      label:'MERCADO IMOBILIÁRIO',
      text:`
      <p>Mercado Imobiliário em Expansão: O setor imobiliário do Espírito Santo está em plena expansão, com uma crescente oferta de empreendimentos de alto padrão. Condomínios de luxo, apartamentos com vistas deslumbrantes e residências que mesclam design moderno com a exuberância natural são apenas algumas das opções disponíveis para investidores que não se contentam com o comum.</p>
      <p>Incentivos Fiscais e Apoio ao Investidor: O governo do Espírito Santo tem implementado políticas de incentivo fiscal e programas de apoio ao investidor, visando atrair novos negócios e fomentar o crescimento econômico. Essas iniciativas criam um ambiente ainda mais atrativo para o investimento, reduzindo barreiras e maximizando o potencial de retorno.</p>
      `
    },
  ]

  return(
    <div className="invest-page">
      <div className="invest-banner" style={{backgroundImage:`url('${'/placeholder_light.jpg'}')`}}>
        <h5>Investidor</h5>
        <h1>Para aqueles que buscam exclusividade e sofisticação</h1>
        <span className="line-separate"></span>
      </div>

      <div className="invest-content">
        {data.map((item, index) => (
          <div key={index} className="invest-item">
            <div className="invest-label"><h4>{item.label}</h4></div>
            <div className="invest-text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
          </div>
        ))}
      </div>

      <InvestNow/>
    </div>
  )
}