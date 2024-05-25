import { IoDownloadOutline } from 'react-icons/io5';
import './styles.css';

export const EnterpriseCatalogDownload = ({data}:any) => {
  return(
    <div className="catalog-download-container">
      <div className="catalog-download-body">
        <div className="catalog-download-content">
          <h5>Book do empreendimento</h5>
          <h3>{data.book.title}</h3>
          <p>{data.book.text}</p>
        </div>
      </div>
      <div className="catalog-download-sidebar">
        <div className="catalog-download-cta">
          <button>Baixe o book digital <IoDownloadOutline /></button>
        </div>
      </div>
    </div>
  )
}