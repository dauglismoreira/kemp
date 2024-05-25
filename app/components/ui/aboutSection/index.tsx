'use client';

import { useState } from 'react';
import { AnimateArrow } from '../animateArrow';
import './styles.css';
import { LinkBox } from '../linkBox';

export const AboutSection = () => {
  const [ctaAnimate, setCtaAnimate] = useState(false)
  const [missionAnimate, setMissionAnimate] = useState(false)
  const [visionAnimate, setVisionAnimate] = useState(false)
  const [valuesAnimate, setValuesAnimate] = useState(false)

  const data = [
    {
      title:'Nossos Consultores',
      link:'#',
    },
    {
      title:'Sou Investidor',
      link:'#',
    },
    {
      title:'Trabalhe na Kemp',
      link:'#',
    },
  ]

  return(
    <div className="aboutSection">
      <div className="contentContainer">
        <div className="title">
          <h3>A Kemp</h3>
        </div>
        <div className="content">
          <p>A <b>Kemp Engenharia</b> é uma empresa de construção civil com atuação no segmento de incorporações imobiliárias e está altamente capacitada a executar as mais diversas obras e serviços. Atuamos com a mesma eficiência em todos os tipos de construção, com garantia de entrega no prazo acordado. Trabalhando sempre com fornecedores de alto padrão, fazemos o acompanhamento minucioso de cada etapa das obras que realizamos, assegurando segurança e qualidade.</p>
          <div
            className="cta desktop"
            onMouseOver={() => setCtaAnimate(true)}
            onMouseLeave={() => setCtaAnimate(false)}
          >
            <span>Saiba mais</span>
            <AnimateArrow active={ctaAnimate}/>
          </div>
        </div>
        <div className="actions">
          <li
            onMouseOver={() => setMissionAnimate(true)}
            onMouseLeave={() => setMissionAnimate(false)}
          ><h5>Nossa missão</h5><AnimateArrow active={missionAnimate}/></li>
          <li
            onMouseOver={() => setVisionAnimate(true)}
            onMouseLeave={() => setVisionAnimate(false)}
          ><h5>Nossa visão</h5><AnimateArrow active={visionAnimate}/></li>
          <li
            onMouseOver={() => setValuesAnimate(true)}
            onMouseLeave={() => setValuesAnimate(false)}
          ><h5>Nossos valores</h5><AnimateArrow active={valuesAnimate}/></li>
        </div>
        <div
          className="cta mobile"
          onMouseOver={() => setCtaAnimate(true)}
          onMouseLeave={() => setCtaAnimate(false)}
        >
          <span>Saiba mais</span>
          <AnimateArrow active={ctaAnimate}/>
        </div>
      </div>
      <div className="moreContainer">
        {data.map((item, index) => (
          <LinkBox key={index} data={item}/>
        ))}
      </div>
    </div>
  )
}