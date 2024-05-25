'use client';

import { AttInput } from '../form/att';
import { AuthorizeInput } from '../form/authorize';
import { CityInput } from '../form/city';
import { EmailInput } from '../form/email';
import { MessageInput } from '../form/message';
import { NameInput } from '../form/name';
import { PhoneInput } from '../form/phone';
import { SelectInput } from '../form/select';
import './styles.css';
import './../form/styles.css';
import { ArchiveInput } from '../form/archiveInput';

interface SendCVProps{
  title:string;
}

export const SendCV = ({title}: SendCVProps) => {

  const handleFields = (e:any) => {
    console.log(e)
  }

  return(
    <form className="send-cv">
        <h3>{title}</h3>
        <div className="contact-input-container">
          <div className="contact-input-row">
            <div className="contact-input-col">
              <NameInput label="Nome" sendValue={handleFields} name="name"/>
            </div>
            <div className="contact-input-col">
              <PhoneInput label="Telefone" sendValue={handleFields} name="phone"/>
            </div>
          </div>
          <div className="contact-input-row">
            <div className="contact-input-col">
              <EmailInput label="E-mail" sendValue={handleFields} name="email"/>
            </div>
            <div className="contact-input-col">
              <CityInput label="Cidade" sendValue={handleFields} name="city"/>
            </div>
          </div>
          <div className="contact-input-row">
            <div className="contact-input-col">
              <MessageInput label="Você pode nos deixar uma mensagem:" sendValue={handleFields} name="message"/>
            </div>
          </div>
          <div className="contact-input-row mobile">
            <ArchiveInput label="Anexe seu currículo" description="pdf ou .doc de até 2mb" sendValue={handleFields} name="cv"/>
          </div>
          <div className="contact-input-row">
            <div className="contact-input-col">
              <AuthorizeInput label="" sendValue={handleFields} name=""/>
            </div>
          </div>
          <div className="contact-input-row">
            <div className="contact-input-col">
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </form>
  )
}