import { TiStar } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import { ContadorContext } from "./Context";
import { AlterarTemaContext } from "./Context";
import { ProdutosContext } from "./Context";
import { CarregandoContext } from "./Context";
import { VscSync } from "react-icons/vsc";

import { EstaDesabilitado1 } from "./Context";
import { EstaDesabilitado2 } from "./Context";
import { EstaDesabilitado3 } from "./Context";
import { EstaDesabilitado4 } from "./Context";
import { EstaDesabilitado5 } from "./Context";
import { EstaDesabilitado6 } from "./Context";

import { Img } from ".";
import { Ul } from ".";
import { Li } from ".";
import { H1 } from ".";
import { Button } from ".";

export function ProdutosLista () {
  const {Contador , setContador} = useContext(ContadorContext);
  const {Altera , setAltera} = useContext(AlterarTemaContext);
  const {Produtos , setProdutos} = useContext(ProdutosContext);
  const {Carregando, setCarregando} = useContext(CarregandoContext);


      const {estaDesabilitado1, setEstaDesabilitado1} = useContext(EstaDesabilitado1);
      const {estaDesabilitado2, setEstaDesabilitado2} = useContext(EstaDesabilitado2);
      const {estaDesabilitado3, setEstaDesabilitado3} = useContext(EstaDesabilitado3);
      const {estaDesabilitado4, setEstaDesabilitado4} = useContext(EstaDesabilitado4);
      const {estaDesabilitado5, setEstaDesabilitado5} = useContext(EstaDesabilitado5);
      const {estaDesabilitado6, setEstaDesabilitado6} = useContext(EstaDesabilitado6);

      const button1 = useRef(null);
      const button2 = useRef(null);
      const button3 = useRef(null);
      const button4 = useRef(null);
      const button5 = useRef(null);
      const button6 = useRef(null);


const NavegarTecla = (button) => {
    button.current.focus();
}
const NavegarTeclaVerdade = (event) => {
  const elementoAtivo = document.activeElement
  if(event.key === 'ArrowRight' & elementoAtivo == button1.current){
    button2.current.focus();
  }
  if(elementoAtivo == button2.current){
    if(event.key === 'ArrowRight'){
      button3.current.focus();
    }
    if(event.key === 'ArrowLeft'){
      button1.current.focus();
    }
    
  }
    if(elementoAtivo == button3.current){
   if(event.key === 'ArrowRight'){
      button4.current.focus();
    }
    if(event.key === 'ArrowLeft'){
      button2.current.focus();
    }  }
    if(elementoAtivo == button4.current){
       if(event.key === 'ArrowRight'){
      button5.current.focus();
    }
    if(event.key === 'ArrowLeft'){
      button3.current.focus();
    }
  }
    if(elementoAtivo == button5.current){
       if(event.key === 'ArrowRight'){
      button6.current.focus();
    }
    if(event.key === 'ArrowLeft'){
      button4.current.focus();
    }
  }
    if(event.key === 'ArrowLeft' & elementoAtivo == button6.current){
    button5.current.focus();
  }

}
    
const Adicionar = (buttonV) => {
  let controleContador = Contador
  let controleProdutos = Produtos
  if (buttonV == 1){
  setEstaDesabilitado1(true)
  controleProdutos[0][6] = true
  }
  if(buttonV == 2){
  setEstaDesabilitado2(true)
  controleProdutos[1][6] = true
  }
    if(buttonV == 3){
  setEstaDesabilitado3(true)
  controleProdutos[2][6] = true
  }
    if(buttonV == 4){
  setEstaDesabilitado4(true)
  controleProdutos[3][6] = true
  }
    if(buttonV == 5){
    setEstaDesabilitado5(true)
    controleProdutos[4][6] = true
  }
    if(buttonV == 6){
    setEstaDesabilitado6(true)
    controleProdutos[5][6] = true
  }
  controleContador = controleContador + 1;
  setContador(controleContador)
  console.log(controleProdutos[0][6])
}


    return(
      <>
      {Carregando && <H1><VscSync /></H1>}
         {!Carregando && <Ul>
            
                  <Li onClick={() => NavegarTecla(button1)} className={Altera}>
                    <div>
                  <strong>{Produtos[0][1]}</strong>

                    </div>
                  <p> {Produtos[0][2]} </p>
                  <p>
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStarOutline/>}
                  </p>
                  <p>{Produtos[0][4]}</p>
                  <Img src={Produtos[0][5]} alt={Produtos[0][1]} />
                  <Button onKeyDown={NavegarTeclaVerdade} ref={button1} onClick={() => Adicionar(1)} disabled={estaDesabilitado1}>Adicionar</Button>
                  
                </Li>
                 <Li onClick={() => NavegarTecla(button2)} className={Altera}>
                  <strong>{Produtos[1][1]}</strong>
                  <p>Preço: {Produtos[1][2]} </p>
                  <p>
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStarHalfOutline/>}
                    {<TiStarOutline/>}
                    {<TiStarOutline/>}
                  </p>
                  <p>{Produtos[1][4]}</p>
                  <Img src={Produtos[1][5]} alt={Produtos[1][1]} />
                  <Button onKeyDown={NavegarTeclaVerdade} ref={button2} onClick={() => Adicionar(2)} disabled={estaDesabilitado2}>Adicionar</Button>
                </Li>
                 <Li onClick={() => NavegarTecla(button3)} className={Altera}>
                  <strong>{Produtos[2][1]}</strong>
                  <p>Preço: {Produtos[2][2]} </p>
                  <p>
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStarOutline/>}
                    {<TiStarOutline/>}
                  </p>
                  <p>{Produtos[2][4]}</p>
                  <Img src={Produtos[2][5]} alt={Produtos[2][1]} />
                  <Button onKeyDown={NavegarTeclaVerdade} ref={button3} onClick={() => Adicionar(3)} disabled={estaDesabilitado3}>Adicionar</Button>
                </Li>
                 <Li  onClick={() => NavegarTecla(button4)} className={Altera}>
                  <strong>{Produtos[3][1]}</strong>
                  <p>Preço: {Produtos[3][2]} </p>
                  <p>
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStarHalfOutline/>}
                  </p>
                  <p>{Produtos[3][4]}</p>
                  <Img src={Produtos[3][5]} alt={Produtos[3][1]} />
                  <Button onKeyDown={NavegarTeclaVerdade} ref={button4} onClick={() => Adicionar(4)} disabled={estaDesabilitado4}>Adicionar</Button>
                </Li>
                <Li onClick={() => NavegarTecla(button5)} className={Altera}>
                  <strong>{Produtos[4][1]}</strong>
                  <p>Preço: {Produtos[4][2]} </p>
                  <p>
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStar/>}
                    {<TiStar/>}
                  </p>
                  <p>{Produtos[4][4]}</p>
                  <Img src={Produtos[4][5]} alt={Produtos[4][1]} />
                  <Button onKeyDown={NavegarTeclaVerdade} ref={button5} onClick={() => Adicionar(5)} disabled={estaDesabilitado5}>Adicionar</Button>
                </Li>
                <Li onClick={() => NavegarTecla(button6)} className={Altera}>
                  <strong>{Produtos[5][1]}</strong>
                  <p>Preço: {Produtos[5][2]} </p>
                  <p>
                    {<TiStar/>}
                    {<TiStarOutline/>}
                    {<TiStarOutline/>}
                    {<TiStarOutline/>}
                    {<TiStarOutline/>}
                  </p>
                  <p>{Produtos[5][4]}</p>
                  <Img src={Produtos[5][5]} alt={Produtos[5][1]} />
                  <Button onKeyDown={NavegarTeclaVerdade} ref={button6} onClick={() => Adicionar(6)} disabled={estaDesabilitado6}>Adicionar</Button>
                </Li>
          </Ul>}
      </>
     
    )
 
}
  
