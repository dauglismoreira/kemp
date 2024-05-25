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

interface GeneralContactProps{
  title:string;
}

export const GeneralContact = ({title}:GeneralContactProps) => {

  const handleFields = (e:any) => {
    console.log(e)
  }

  return(
    <>
    <form className="general-contact-form">
        <div className="contact-input-container">
        <div className="contact-input-row">
            <div className="contact-input-col">
              <ReasonInput label="Qual o motivo do seu contato" sendValue={handleFields} name="reason"/>
            </div>
          </div>
          <h3 className="text-regularGray text-lg uppercase font-primary font-semibold mb-8">{title}</h3>
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
    </>  
  )
}