'use client';

import Link from 'next/link';
import './styles.css';
import { NameInput } from '../form/name';
import { PhoneInput } from '../form/phone';
import { EmailInput } from '../form/email';
import { CityInput } from '../form/city';
import { MessageInput } from '../form/message';
import { AuthorizeInput } from '../form/authorize';
import { AttInput } from '../form/att';
import './../form/styles.css';
import { SelectInput } from '../form/select';

export const InvestNow = () => {

  const data = {
    title:'INVISTA AGORA',
    text:'Preencha o formulário abaixo para receber informações exclusivas e personalizadas sobre as oportunidades de investimento mais promissoras da região. Nossa equipe de especialistas está pronta para orientá-lo em cada passo dessa jornada lucrativa.',
    label:'Comece a transformar suas aspirações de investimento em realidade.',
  }
  
  const handleFields = (e:any) => {
    console.log(e)
  }

  return(
    <div className="invest-contact-container">
      <div className="invest-contact-title">
        <h3>{data.title}</h3>
      </div>
      <div className="invest-contact-content">
        <p>{data.text}</p>
        <label>{data.label}</label>
      </div>
      <form className="invest-contact-form">
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
              <SelectInput label="Tipo de investimento" sendValue={handleFields} options={[]} name="type-invest"/>
            </div>
            <div className="contact-input-col">
              <SelectInput label="Valor do investimento" sendValue={handleFields} options={[]} name="value-invest"/>
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
    </div>
  )
}