import { AnimateArrow } from '../components/ui/animateArrow';
import { CtaSection } from '../components/ui/ctaSection';
import { InvestNow } from '../components/ui/investNow';
import { RegionContent } from '../components/ui/regionContent';
import { RelatedEnterprise } from '../components/ui/relatedEnterprise';
import './styles.css';

export default function Region () {
  const data = [
    {
      title:'A Região',
      id:1,
      text:`
        <p>O Espírito Santo, localizado na Região Sudeste do Brasil, é um estado que combina beleza natural, diversidade cultural e dinamismo econômico. Com sua capital em Vitória, uma ilha repleta de belezas naturais e históricas, o estado se destaca por suas praias paradisíacas, montanhas exuberantes e uma forte tradição cultural que reflete a mistura de povos indígenas, portugueses, africanos, além de imigrantes europeus, principalmente italianos e alemães.</p>
        <p>Economicamente, o Espírito Santo é conhecido pela sua produção de café, um dos melhores do mundo, além de ser um centro importante para a indústria de petróleo e gás natural, siderurgia, celulose e fruticultura. Seu porto, um dos mais movimentados do país, desempenha um papel crucial na economia local e nacional, facilitando o comércio internacional.</p>
        <p>A diversidade geográfica do estado oferece uma ampla gama de atividades para todos os gostos, desde o turismo de aventura nas áreas montanhosas até o relaxamento nas belas praias da costa. O Espírito Santo também é rico em festivais culturais, como a Festa da Penha e o Festival de Inverno de Domingos Martins, que celebram a herança e as tradições locais.</p>
        <p>Em resumo, o Espírito Santo é um estado vibrante e acolhedor, oferecendo uma qualidade de vida excepcional, oportunidades econômicas e uma rica tapeçaria cultural para seus moradores e visitantes.</p>
      `
    },
    {
      title:'Vila Velha',
      id:2,
      text:`
        <p>O Espírito Santo, localizado na Região Sudeste do Brasil, é um estado que combina beleza natural, diversidade cultural e dinamismo econômico. Com sua capital em Vitória, uma ilha repleta de belezas naturais e históricas, o estado se destaca por suas praias paradisíacas, montanhas exuberantes e uma forte tradição cultural que reflete a mistura de povos indígenas, portugueses, africanos, além de imigrantes europeus, principalmente italianos e alemães.</p>
        <p>Economicamente, o Espírito Santo é conhecido pela sua produção de café, um dos melhores do mundo, além de ser um centro importante para a indústria de petróleo e gás natural, siderurgia, celulose e fruticultura. Seu porto, um dos mais movimentados do país, desempenha um papel crucial na economia local e nacional, facilitando o comércio internacional.</p>
        <p>A diversidade geográfica do estado oferece uma ampla gama de atividades para todos os gostos, desde o turismo de aventura nas áreas montanhosas até o relaxamento nas belas praias da costa. O Espírito Santo também é rico em festivais culturais, como a Festa da Penha e o Festival de Inverno de Domingos Martins, que celebram a herança e as tradições locais.</p>
        <p>Em resumo, o Espírito Santo é um estado vibrante e acolhedor, oferecendo uma qualidade de vida excepcional, oportunidades econômicas e uma rica tapeçaria cultural para seus moradores e visitantes.</p>
      `
    },
    {
      title:'Caracioca',
      id:3,
      text:`
        <p>O Espírito Santo, localizado na Região Sudeste do Brasil, é um estado que combina beleza natural, diversidade cultural e dinamismo econômico. Com sua capital em Vitória, uma ilha repleta de belezas naturais e históricas, o estado se destaca por suas praias paradisíacas, montanhas exuberantes e uma forte tradição cultural que reflete a mistura de povos indígenas, portugueses, africanos, além de imigrantes europeus, principalmente italianos e alemães.</p>
        <p>Economicamente, o Espírito Santo é conhecido pela sua produção de café, um dos melhores do mundo, além de ser um centro importante para a indústria de petróleo e gás natural, siderurgia, celulose e fruticultura. Seu porto, um dos mais movimentados do país, desempenha um papel crucial na economia local e nacional, facilitando o comércio internacional.</p>
        <p>A diversidade geográfica do estado oferece uma ampla gama de atividades para todos os gostos, desde o turismo de aventura nas áreas montanhosas até o relaxamento nas belas praias da costa. O Espírito Santo também é rico em festivais culturais, como a Festa da Penha e o Festival de Inverno de Domingos Martins, que celebram a herança e as tradições locais.</p>
        <p>Em resumo, o Espírito Santo é um estado vibrante e acolhedor, oferecendo uma qualidade de vida excepcional, oportunidades econômicas e uma rica tapeçaria cultural para seus moradores e visitantes.</p>
      `
    },
  ]

  return(
    <div className="Region">
      <div className="region-img-container">
        <img src="/placeholder_light.jpg"/>
      </div>

      <RegionContent data={data} />

      <CtaSection/>

      <div className="image-section">
        <div className="title">
          <span><h3>Vila Velha</h3></span>
        </div>
        <img src={'/placeholder_light.jpg'}/>
      </div>

      <div className="invest-section">
        <InvestNow/>
      </div>

      <RelatedEnterprise title={'Destaques da região'}/>

    </div>
  )
}