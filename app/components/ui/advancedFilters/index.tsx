import { IoCloseOutline } from 'react-icons/io5';
import './styles.css';
import { useState } from 'react';
import { OptionButton } from '../optionButton';
import { PrimaryButton } from '../primaryButton';

interface AdvancedFiltersProps {
  open:boolean;
  onClose:() => void;
}

export const AdvancedFilters = ({open, onClose}: AdvancedFiltersProps) => {
  const [city, setCity] = useState('')
  const [status, setStatus] = useState('')

  const handleOptions = (e:any) => {
    console.log(e)
  }

  return(
    <>
      <div className={`advancedFilters ${open ? 'open' : ''}`}>
        <span className="close" onClick={onClose}><IoCloseOutline /></span>

        <div className="body">
          <h3>Filtros avançados</h3>
          <fieldset>
            <label>Cidade</label>
            <select onChange={(e) => setCity(e.target.value)}>
              <option value="Vilha velha/ES">Vilha velha/ES</option>
            </select>
          </fieldset>
          <fieldset>
            <label>Status da obra</label>
            <select onChange={(e) => setStatus(e.target.value)}>
              <option value="">Todos</option>
            </select>
          </fieldset>

          <OptionButton onSend={handleOptions} label="Suítes" />
          <OptionButton onSend={handleOptions} label="Vagas" />
        </div>

        <div className="container-buttons">
          <PrimaryButton extraClass="bg-darkBlue text-white" text="Encontrar Imóveis" action={onClose}/>
          <PrimaryButton extraClass="text-darkBlue bg-white border-darkBlue border" text="Limpar filtros" action={onClose}/>
        </div>

      </div>
      <div className={`advancedFiltersOverlay ${open ? 'open' : ''}`} onClick={onClose}></div>
    </>
  )
}