import { NavLink } from "react-router-dom";
import { TiAdjustContrast } from "react-icons/ti";
import { useEffect, useState, useContext} from "react";
import { ContadorContext } from "./Context";
import { TemaDark } from "./Context";
import { AlterarTemaContext } from "./Context";
import { GiBirdTwitter } from "react-icons/gi";
import { CarregandoContext } from "./Context";



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
    <nav className={`nave ${Altera}`}>
      <h4 className={`logo  ${Altera}`}><GiBirdTwitter size={50} /> HenShopp</h4>
      <div>
           <NavLink  onClick={AtivarCarregamento} className={`navLink ${Altera}`} to={"/"} ><strong>Loja</strong></NavLink>
            <NavLink onClick={AtivarCarregamento}  className={`navLink ${Altera}`} to={"/Carrinho"} ><strong>Carrinho</strong ></NavLink>
      </div>
      <p className="tema" onClick={trocarTema}>{<TiAdjustContrast size={50}/>}</p>
      
      
        <p className="contador">{Contador}</p>
        
    </nav>
    ) 
}