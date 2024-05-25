import { GeneralContact } from '../components/ui/generalContact';
import './styles.css';

export default function Contact(){
  return(
    <div className="contact-form-container">
      <h1>ENVIE UMA MENSAGEM</h1>
      <div className="content">
        <div className="contact-form-body">
          <p>Para iniciar seu atendimento, basta preencher o formulário abaixo com as informações solicitadas. Nossa equipe se dedica a oferecer respostas rápidas e eficazes, garantindo que suas dúvidas sejam esclarecidas e suas necessidades atendidas com a máxima agilidade.</p>
          <h5>Comprometemo-nos com a sua satisfação e estamos ansiosos para ajudá-lo.</h5>
        </div>
        <div className="contact-form-sidebar">
        </div>
      </div>
      <GeneralContact title="Envie sua mensagem para Kemp"/>
    </div>
  )
}