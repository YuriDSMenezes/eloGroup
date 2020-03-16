import React, { useState } from "react";

import { Input,Form } from "@rocketseat/unform";
import logo from "../../assets/logo.png";
import { Container, LogoField  } from "./styles";
import api from '../../services/api'

import * as Yup from 'yup'
import {toast} from 'react-toastify'

const schema = Yup.object().shape({
  name: Yup.string().min(8,"Por gentileza informar seu nome e sobrenome").required("Por gentileza informar seu nome e sobrenome"),
  phone: Yup.string().min(9).required("Por gentilizea informar seu número no formato xx-xxxxxxx")
})

export default function Main() {
  const [yesOption, setYesOption] = useState(false);
  const [disable, setDisable] = useState(false)
  const [errorPhoneMessage, setErrorPhoneMessage] = useState(false)
  const [errorNameMessage, setErrorNameMessage] = useState(false)
  const [radioOption, setRadioOption] = useState({
    facebook:false,
    linkedin:false,
    instagram:false
  })


  function handleClickYes() {
    setYesOption(true);
  }

  function handleClickNo(e) {
    setYesOption(false);

  }

  function handleSubmit({name,phone}) {
    function checkName() {
      const regex = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{3,19}\b/;
  
      const regexName = regex.exec(name)
      if(regexName) {
        setErrorNameMessage(false)
      }else {
        setErrorNameMessage(true)
        return
      }
    }

    function checkNumber() {
      const regex = /\d{2}\-\d{7}/
  
      const regexNumber = regex.exec(phone)
  
      if(regexNumber) {
        setErrorPhoneMessage(false)
      }else {
        setErrorPhoneMessage(true)
        return
      }
    }
    checkName()
    checkNumber()
    
    if(yesOption) {
      try {
        api.post('', 
          {
            facebook: radioOption.facebook,
            instagram:radioOption.instagram,
            linkedin:radioOption.linkedin,
            name,
            phone
          }
        )
        setDisable(true)
        toast.success("Dados enviados com sucesso").fontcolor("#ccc")
      }catch(err) {
        toast.error("Falha no envio dos dados")
      }
    } else {
      try {
        api.post('', {
          name,phone
        })
        setDisable(true)
        toast.success("Dados enviados com sucesso")
      }catch(err) {
        toast.error("Falha no envio dos dados")
      }
    }

  }

  function handleOptionChange(e){
    setRadioOption({
      ...radioOption,
      [e.target.name]: e.target.checked,
    })
  }
 
 

  return (
    <Container>
      <LogoField>
        <img src={logo} alt="logo" />
      </LogoField>
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input name="name" type="text" id="name"/>
        {!errorNameMessage ? '': <span>Por gentileza, informa ao menos um sobrenome válido.</span>}
        <label htmlFor="phone">Phone</label>
        {!errorPhoneMessage ? '' : <span>Formato aceito xx-xxxxxxx</span>}
        <Input name="phone" type="tel" id="phone"/>
        <p>How did you know us ?</p>
        <select id="knowUs">
          <optgroup>
            <option value="tv">Tv</option>
            <option value="Internet">Internet</option>
            <option value="others">Others</option>
          </optgroup>
        </select>
        <div>
          <p>HAS SOCIAL MEDIA ?</p>
          <Input
          label="Sim"
            type="radio"
            name="socialMedias"
            id="yesOption"
            onClick={handleClickYes}
          />
          <Input
          label="Não"
            type="radio"
            name="socialMedias"
            id="noOption"
            onClick={handleClickNo}
          />
        </div>
        <div>
        {yesOption ? (
          <>
          <Input label="Facebook"type="checkbox" name="facebook" id="facebook" checked={radioOption.facebook} onClick={handleOptionChange}  />
          <Input label="Linkedin"type="checkbox" name="linkedin" id="linkedin" checked={radioOption.linkedin} onClick={handleOptionChange} />
          <Input label="Instagram"type="checkbox" name="instagram" id="instagram" checked={radioOption.instagram} onClick={handleOptionChange} />
          </>
        ): ''}
        </div>
          {!disable ? (
            <button type="submit">Enviar</button>
          ): <button disabled="disabled" className="disabled">Disabled</button>}
      </Form>
    </Container>
  );
}
