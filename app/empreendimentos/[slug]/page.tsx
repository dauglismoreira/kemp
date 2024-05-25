import './styles.css';
import {enterpriseMock} from './mock';
import { EnterprisePhotosGallery } from '@/app/components/ui/enterprisePhotosGallery';
import { EnterpriseTypeGallery } from '@/app/components/ui/enterpriseTypeGallery';
import { EnterpriseCatalogDownload } from '@/app/components/ui/enterpriseCatalogDownload';
import { EnterpriseProgress } from '@/app/components/ui/enterpriseProgress';
import { EnterpriseContact } from '@/app/components/ui/enterpriseContact';
import { EnterpriseCard } from '@/app/components/ui/enterpriseCard';

export default function Enterprise(){

  const menu = [
    {
      label:'O Empreendimento',
      link:'#',
    },
    {
      label:'Galeria',
      link:'#',
    },
    {
      label:'Plantas',
      link:'#',
    },
    {
      label:'Videos',
      link:'#',
    },
    {
      label:'Localização',
      link:'#',
    },
    {
      label:'Tour Virtual',
      link:'#',
    },
    {
      label:'Obra',
      link:'#',
    },
    {
      label:'Tenho interesse',
      link:'#',
    },
  ]

  return(
    <div className="enterprise-page">
      <div className="cover-section">
        <img src={enterpriseMock.highImage}></img>
      </div>

      <div className="enterprise-content">
        <div className="enterprise-body-container">
          <div className="enterprise-menu">
            <ul>
              {menu.map((item, index) => (
                <li key={index}>{item.label}</li>
              ))}
            </ul>
          </div>

          <div className="enterprise-body">
            <h1>{enterpriseMock.title}</h1>
            <p>{enterpriseMock.address}</p>

            <div className="characteristcs">
              <span>{enterpriseMock.rooms}</span>
              <span>{enterpriseMock.parking}</span>
              <span>{enterpriseMock.type}</span>
            </div>

            <img className="vertical-image-mobile" src={enterpriseMock.verticalImage}/>

            <div className="enterprise-description" dangerouslySetInnerHTML={{ __html: enterpriseMock.description }}></div>

            <div className="skills">
              <h3>Diferenciais</h3>
              <ul>
                {enterpriseMock.skills.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="features">
              <h3>LAZER COMPLETO</h3>
              <ul>
                {enterpriseMock.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="details">
              <h3>DETALHES</h3>
              <p><b>{enterpriseMock.detail_title}</b></p>
              <ul>
                {enterpriseMock.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        <div className="enterprise-sidebar-container">
          <div className="enterprise-sidebar">
            <h2>{enterpriseMock.title}</h2>
            <p>{enterpriseMock.address}</p>
            <img src={enterpriseMock.verticalImage}/>
          </div>
        </div>

        <EnterprisePhotosGallery data={enterpriseMock}/>

        <EnterpriseTypeGallery data={enterpriseMock.plant_gallery}/>

        <div className="videos">
          <h3>Vídeos</h3>
          <div className="video-content" dangerouslySetInnerHTML={{ __html: enterpriseMock.video }}></div>
        </div>

        <div className="localization">
          <h3>Localização</h3>
          <div className="locatization-content">
            <div className="localization-info">
              <p><b>{enterpriseMock.localization.title}</b></p>
              <p className="description">{enterpriseMock.localization.text}</p>
              <h5>Proximidades</h5>
              <ul>
                {enterpriseMock.localization.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="localization-cta-container desktop">
              <span className="localization-cta">Como chegar</span>
            </div>
          </div>
          <div className="map-content" dangerouslySetInnerHTML={{ __html: enterpriseMock.localization.mapa }}></div>
          <div className="localization-cta-container mobile">
            <span className="localization-cta">Como chegar</span>
          </div>
        </div>

        <EnterpriseCatalogDownload data={enterpriseMock}/>

        <div className="tour">
          <h3>Tour virtual</h3>
          <div className="tour-content" dangerouslySetInnerHTML={{ __html: enterpriseMock.tour }}></div>
        </div>

        <EnterpriseProgress data={enterpriseMock}/>

        <EnterpriseContact data={enterpriseMock}/>

        <div className="related-container">
          <div className="related-title">
            <h3>Conheça outros empreendimentos</h3>
          </div>
          <div className="content">
            {enterpriseMock.related.map((item:any, index:number) => (
              <EnterpriseCard key={index} data={item}/>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}