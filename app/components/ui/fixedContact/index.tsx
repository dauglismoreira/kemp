import { FaWhatsapp } from 'react-icons/fa';
import './styles.css';
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import Link from 'next/link';

export const FixedContact = () => {

  const data = [
    {
      label:'WhatsApp',
      link:'#',
      icon:<FaWhatsapp />,
    },
    {
      label:'Canal de Vendas',
      link:'/central-de-vendas',
      icon:<MdOutlineLocalPhone />,
    },
    {
      label:'Email',
      link:'#',
      icon:<MdOutlineEmail />,
    },
    {
      label:'Ligamos para você',
      link:'#',
      icon:<TfiHeadphoneAlt />,
    },
  ]

  return(
    <div className="fixedContact">
      {data.map((item, index) => (
        // <Link key={index} href={item.link}>
          <div key={index} className="fixed-button">
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </div>
        // </Link>
      ))}
    </div>
  )
}