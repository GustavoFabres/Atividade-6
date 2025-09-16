import { useEffect, useState, useContext} from "react";
import { ProdutosContext } from "./Context"
import { ContadorContext } from "./Context";
import { AlterarTemaContext } from "./Context";
import { CarregandoContext } from "./Context";
import { VscSync } from "react-icons/vsc";


import { EstaDesabilitado1 } from "./Context";
import { EstaDesabilitado2 } from "./Context";
import { EstaDesabilitado3 } from "./Context";
import { EstaDesabilitado4 } from "./Context";
import { EstaDesabilitado5 } from "./Context";
import { EstaDesabilitado6 } from "./Context";

export function CarrinhoLista() {
  
      const {Produtos , setProdutos} = useContext(ProdutosContext);
      const {Contador , setContador} = useContext(ContadorContext);
      const {Altera , setAltera} = useContext(AlterarTemaContext);
      const {Carregando, setCarregando} = useContext(CarregandoContext);
      

      const {estaDesabilitado1, setEstaDesabilitado1} = useContext(EstaDesabilitado1);
      const {estaDesabilitado2, setEstaDesabilitado2} = useContext(EstaDesabilitado2);
      const {estaDesabilitado3, setEstaDesabilitado3} = useContext(EstaDesabilitado3);
      const {estaDesabilitado4, setEstaDesabilitado4} = useContext(EstaDesabilitado4);
      const {estaDesabilitado5, setEstaDesabilitado5} = useContext(EstaDesabilitado5);
      const {estaDesabilitado6, setEstaDesabilitado6} = useContext(EstaDesabilitado6);

const Remover = (buttonV) => {
  let controleContador = Contador
  let controleProdutos = Produtos
  if (buttonV == 1){
    setEstaDesabilitado1(false)
  controleProdutos[0][6] = false
  }
  if(buttonV == 2){
      setEstaDesabilitado2(false)

  controleProdutos[1][6] = false
  }
    if(buttonV == 3){
        setEstaDesabilitado3(false)
  controleProdutos[2][6] = false
  }
    if(buttonV == 4){
 setEstaDesabilitado4(false)
  controleProdutos[3][6] = false
  }
    if(buttonV == 5){
            setEstaDesabilitado5(false)
    controleProdutos[4][6] = false
  }
    if(buttonV == 6){
            setEstaDesabilitado6(false)
    controleProdutos[5][6] = false
  }
  controleContador = controleContador - 1;
  setContador(controleContador)
  console.log(controleProdutos[0][6])
}

    return(
      <>
      {Carregando && <h1><VscSync /></h1>}
        {!Carregando && <ul className="carrinho">
            {Produtos[0][6] && <li className={Altera}>
                <strong>{Produtos[0][1]}</strong> 
            <p>Preço: {Produtos[0][2]}</p>
            <button onClick={() => Remover(1)}>Remover</button>
            </li >}
                        {Produtos[1][6] && <li className={Altera}>
                <strong>{Produtos[1][1]}</strong> 
            <p>Preço: {Produtos[1][2]}</p>
            <button onClick={() => Remover(2)}>Remover</button>
            </li>}
                        {Produtos[2][6] && <li className={Altera}>
                <strong>{Produtos[2][1]}</strong> 
            <p>Preço: {Produtos[2][2]}</p>
            <button onClick={() => Remover(3)}>Remover</button>
            </li>}
                        {Produtos[3][6] && <li className={Altera}>
                <strong>{Produtos[3][1]}</strong> 
            <p>Preço: {Produtos[3][2]}</p>
            <button onClick={() => Remover(4)}>Remover</button>
            </li>}
                        {Produtos[4][6] && <li className={Altera}>
                <strong>{Produtos[4][1]}</strong> 
            <p>Preço: {Produtos[4][2]}</p>
            <button onClick={() => Remover(5)}>Remover</button>
            </li>}
                        {Produtos[5][6] && <li className={Altera}>
                <strong>{Produtos[5][1]}</strong> 
            <p>Preço: {Produtos[5][2]}</p>
            <button onClick={() => Remover(6)}>Remover</button>
            </li>}
        </ul>}
      </>
    )
}