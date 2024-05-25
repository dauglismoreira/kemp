'use client';

import { MdTune } from 'react-icons/md';
import { EnterpriseCard } from '../enterpriseCard';
import { SectionMenu } from '../sectionMenu';
import { SectionTitle } from '../sectionTitle';
import './styles.css';
import { useState } from 'react';
import { AdvancedFilters } from '../advancedFilters';

export const EnterpriseCatalog = () => {
  const [advancedOpen, setAdvancedOpen] = useState(false)

  const data = [
    {
      label:'Todos',
      link:'#'
    },
    {
      label:'Breve lançamentos',
      link:'#'
    },
    {
      label:'Em obra',
      link:'#'
    },
    {
      label:'Pronto para morar',
      link:'#'
    },
  ]

  const cardsMock = [
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Murano'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Malta'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Mykonos'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Kiribati'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Murano'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Malta'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Mykonos'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Kiribati'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Murano'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Malta'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Mykonos'
    },
    {
      photo:'',
      link:'#',
      city:'Vilha Velha/ES',
      title:'Ilhas de Kiribati'
    },
  ]

  return(
    <section id="catalog" className="section">
      <div className="container">
        <SectionTitle text={'Empreendimentos'}/>
        <div className="filters-container">
          <div className="menu-container">
            <SectionMenu data={data}/>
          </div>
          <div className="advanced-filters" onClick={() => setAdvancedOpen(true)}>
            <MdTune />
            <span>Filtros avançados</span>
          </div>
        </div>
        <div className="content">
          {cardsMock.map((item:any, index:number) => (
            <EnterpriseCard key={index} data={item}/>
          ))}
        </div>
      </div>
      <AdvancedFilters open={advancedOpen} onClose={() => setAdvancedOpen(false)}/>
    </section>
  )
}