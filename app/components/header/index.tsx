'use client';

import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5';
import './styles.css';
import { SearchBar } from '../ui/searchBar';
import { useEffect, useState } from 'react';
import { MenuBar } from '../ui/menuBar';
import Link from 'next/link';

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  useEffect(() => {
    if (open || openMenuMobile) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [open, openMenuMobile])

  return(
    <>
      <div className={`header ${openMenu ? 'open' : ''}`}>
        <div className="content">
          <div className={`toggle desktop ${openMenu ? 'open' : ''}`} onClick={() => setOpenMenu(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`header-menu ${openMenu ? 'open' : ''}`}>
            <span onClick={() => setOpenMenu(false)}><IoCloseOutline /></span>
            <ul>
              <Link href="/sobre"><li>Institucional</li></Link>
              <Link href="/empreendimentos"><li>Empreendimentos</li></Link>
              <Link href="/trabalhe-na-kemp"><li>Trabalhe na Kemp</li></Link>
              <Link href="/fale-conosco"><li>Fale conosco</li></Link>
              <Link href="/blog"><li>Blog</li></Link>
            </ul>
          </div>
          <Link href="/"><img src="/LOGO-KEMP.png"/></Link>
          <div className="actions">
            <div className="search" onClick={() => setOpen(true)}>
              <IoSearchOutline />
            </div>
            <div className="toggle mobile" onClick={() => setOpenMenuMobile(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[88px] w-full"></div> */}
      

      <MenuBar open={openMenuMobile} onClose={() => setOpenMenuMobile(false)}/>

      <SearchBar open={open} onClose={() => setOpen(false)}/>
    </>
  )  
}