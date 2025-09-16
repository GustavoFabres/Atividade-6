import { NavLink } from "react-router-dom";
import { TiAdjustContrast } from "react-icons/ti";
import { useEffect, useState, useContext} from "react";
import { ContadorContext } from "./Context";
import { TemaDark } from "./Context";
import { AlterarTemaContext } from "./Context";
import { GiBirdTwitter } from "react-icons/gi";
import { CarregandoContext } from "./Context";

import { Plogo } from "./index";
import { A } from "./index";
import { H4 } from "./index";
import { Nav } from "./index";

export function NavBar1() {
  const {Contador , setContador} = useContext(ContadorContext);
  const {Tema , setTema} = useContext(TemaDark);
  const {Altera , setAltera} = useContext(AlterarTemaContext);
  const {Carregando, setCarregando} = useContext(CarregandoContext);

  function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }

  const AtivarCarregamento = async() => {
    setCarregando(true)
    await delay(2000);
    setCarregando(false)
  }

  const trocarTema = () => {
    Tema == false ? setTema(true) : setTema(false);
    console.log(Tema)
  }
  const AlterarTema = async() => {
       if (Tema == true) {
          setAltera("dark")
    } else {
          setAltera(null)
    }
    console.log("oi")
  }
  useEffect(() => {
    AlterarTema();
  }, [Tema])

    return(
    <Nav className={Altera}>
      <H4 ><GiBirdTwitter size={50} /> HenShopp</H4>
      <div>
           <NavLink onClick={AtivarCarregamento} className={Altera} to={"/"} ><strong>Loja</strong></NavLink>
            <NavLink onClick={AtivarCarregamento}  className={Altera} to={"/Carrinho"} ><strong>Carrinho</strong ></NavLink>
      </div>
      <Plogo onClick={trocarTema}>{<TiAdjustContrast size={50}/>}</Plogo>
      
      
        <p>{Contador}</p>
        
    </Nav>
    ) 
}