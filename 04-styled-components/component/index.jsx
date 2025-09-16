import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Girar = keyframes`
 from {
    transform: rotate(0deg); 
  }
  to {
    transform: rotate(360deg); 
  }
`;

export const Body = styled.body`
     font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: black;
    background-color: rgb(255, 255, 255);
    text-align: center;
    padding: 2%;
    transition-duration: 1s;
`;
export const H4 = styled.h4`
        color: rgb(4, 138, 138);
`;
export const Img = styled.img`
    border-radius: 8px;
    width: 200px;
    height: 200px;
`;
export const A = styled.a`
    text-decoration: none;
    color: black;
    padding: 100px;
    height: 1px;
    width: 1px;
    border: 0%;
    margin: 0%;

    &:hover {
        color: rgb(198, 255, 252);
        transition-duration: 0.5s;
    }
`;
export const Nav = styled.nav`
    background-color: rgb(30, 207, 207);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15%;
    align-items: center;
    height: 60px;
    width: 100%;
    box-shadow: 0px 3px 3px rgb(82, 79, 79);
    transition-duration: 1s;
`;
export const Plogo = styled.p`
    transition-duration: 0.5s;

    &:hover {
    color: rgb(255, 255, 255);
    transition-duration: 0.5s;
    transform: rotate(180deg);
    }
`;
export const Ul = styled.ul`
    display: grid;
    list-style: none;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1024px){
    {
        grid-template-columns: repeat(3, 1fr);
    }

@media (max-width: 768px)
    {
        grid-template-columns: repeat(2, 1fr);
    }

@media (max-width: 480px)
    {
        grid-template-columns: repeat(1, 1fr);
    }

`;
export const Li = styled.li`
    background-color: rgb(141, 180, 224);
    border-radius: 30px;
    margin: 20px;
    padding: 20px;
    box-shadow: 0px 0px 3px rgb(82, 79, 79);
    height: 410px;
    transition-duration: 1s;
`;
export const LiCarrinho = styled.li`
    background-color: rgb(141, 180, 224);
    border-radius: 30px;
    margin: 20px;
    padding: 20px;
    box-shadow: 0px 0px 3px rgba(43, 43, 43, 1);
    height: 100px;
    transition-duration: 1s;
`;
export const H1 = styled.h1`
 animation: ${Girar} 2s linear infinite;
 color: rgb(35, 173, 207);
`;
export const Button = styled.button`

  display: inline-block;
  padding: 12px 24px;
  color: #000000ff; 
  border: 2px solid #134d55ff;
  background-color: transparent; 
  text-align: center; 
  text-decoration: none; 
  transition: all 0.3s ease; 
border-radius: 30px;

   &:hover {

  background-color: #6382b1ff; 
  color: #000000; 
  cursor: pointer; 
  transition-duration: 0.3s;
}
  &:focus{
       
    background-color: rgb(198, 255, 252);
    transition-duration: 0.3s;
    width: 100px;
    height: 40px;
    box-shadow: 0px 3px 3px rgb(82, 79, 79);
    outline: none;
}
    &:disabled{
    background-color: rgb(66, 66, 66);
    color: white;
    pointer-events: none;
    cursor: not-allowed; 
    opacity: 0.6; 
    
}
`;