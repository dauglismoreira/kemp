import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5';
import './styles.css';
import { EnterpriseCard } from '../enterpriseCard';
import { MdTune } from 'react-icons/md';
import { AdvancedFilters } from '../advancedFilters';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';

interface MenuBarProps {
  open:boolean;
  onClose:() => void;
}

export const MenuBar = ({open, onClose}: MenuBarProps) => {
  const [openAc1, setOpenAc1] = useState(false)
  const [openAc2, setOpenAc2] = useState(false)

  return(
    <div className={`menuBar ${open ? 'open' : ''}`}>
      <span className="close" onClick={onClose}><IoCloseOutline /></span>

      <div className="menu-content">
        <ul>
          <li className={`${openAc1 ? 'open' : ''}`} onClick={() => {
            setOpenAc1(!openAc1)
            setOpenAc2(false)
            }}>Institucional
            <IoIosArrowDown />
          </li>
          <div className={`sub-menu ${openAc1 ? 'open' : ''}`}>
            <Link href="/sobre" onClick={onClose}><li>Sobre a Kemp</li></Link>
            <Link href="/consultores" onClick={onClose}><li>Nossos Consultores</li></Link>
            <Link href="/regiao" onClick={onClose}><li>Conheça a região</li></Link>
          </div>
          <Link href="/sobre" onClick={onClose}><li>Sobre a Kemp</li></Link>
          <Link href="/empreendimentos" onClick={onClose}><li>Empreendimentos</li></Link>
          <Link href="/trabalhe-na-kemp" onClick={onClose}><li>Trabalhe na Kemp</li></Link>
          <li className={`${openAc2 ? 'open' : ''}`} onClick={() => {
            setOpenAc2(!openAc2)
            setOpenAc1(false)
            }}>Fale Conosco
            <IoIosArrowDown />
          </li>
          <div className={`sub-menu ${openAc2 ? 'open' : ''}`}>
            <Link href="/fale-conosco" onClick={onClose}><li>Envie uma mensagem</li></Link>
            <Link href="#" onClick={onClose}><li>Segunda vida do boleto</li></Link>
            <Link href="/investimento" onClick={onClose}><li>Sou investidor</li></Link>
            <Link href="/fale-conosco" onClick={onClose}><li>Assistência Técnica</li></Link>
          </div>
          <Link href="blog" onClick={onClose}><li>Blog</li></Link>
        </ul>

        <div className="social-container">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Youtube</span>
        </div>
      </div>
    </div>
  )
}