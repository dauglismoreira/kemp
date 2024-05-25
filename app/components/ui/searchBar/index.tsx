import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5';
import './styles.css';
import { EnterpriseCard } from '../enterpriseCard';
import { MdTune } from 'react-icons/md';
import { AdvancedFilters } from '../advancedFilters';
import { useState } from 'react';

interface SearchBarProps {
  open:boolean;
  onClose:() => void;
}

export const SearchBar = ({open, onClose}: SearchBarProps) => {
  const [advancedOpen, setAdvancedOpen] = useState(false)

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
    <div className={`searchBar ${open ? 'open' : ''}`}>
      <span className="close" onClick={onClose}><IoCloseOutline /></span>

      <div className="search-content">
        <div className="search-result">
          <div className="filters">
            <div className="searchInput">
              <input placeholder="O que você procura?"></input>
              <IoSearchOutline />
            </div>
            <div className="advanced-filters" onClick={() => setAdvancedOpen(true)}>
              <MdTune />
              <span>Filtros avançados</span>
            </div>
          </div>
          <div className="result">
            {cardsMock.map((item:any, index:number) => (
              <EnterpriseCard key={index} data={item}/>
            ))}
          </div>
        </div>
        <div className="search-map">

        </div>
      </div>

      <AdvancedFilters open={advancedOpen} onClose={() => setAdvancedOpen(false)}/>
    </div>
  )
}