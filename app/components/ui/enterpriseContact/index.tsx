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
import { ReasonInput } from '../form/reason';

interface EnterpriseContactProps{
  data:any;
}

export const EnterpriseContact = ({data}:EnterpriseContactProps) => {

  const handleFields = (e:any) => {
    console.log(e)
  }

  return(
    <div className="enterprise-form-container">
      <h1>{data.contact.title}</h1>
      <div className="content">
        <div className="enterprise-form-body">
          <p>{data.contact.text}</p>
          <h5>{data.contact.sub_title}</h5>
        </div>
        <div className="enterprise-form-sidebar">
        </div>
      </div>
      <form className="enterprise-contact-form">
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
              <MessageInput
                label="Você pode nos deixar uma mensagem:"
                sendValue={handleFields}
                name="message"
                placeholder={`Tenho interesse em saber mais informações sobre o empreendimento ${data.title}`}
              />
            </div>
          </div>
          <div className="contact-input-row mobile">
            <AttInput label="Selecione uma preferência para o seu atendimento" sendValue={handleFields} name="contact-type"/>
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
        <div className="contact-input-sidebar desktop">
          <AttInput label="Selecione uma preferência para o seu atendimento" sendValue={handleFields} name="contact-type"/>
        </div>
      </form>
    </div>
  )
}