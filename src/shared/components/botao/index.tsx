import { IProps } from "../../../types";
import { ContainerButton } from "./style";

export const Botao = ({ image, text, languages }: IProps) => {
  
    return (
      <>
        <ContainerButton  onClick={()=> languages(text)}>
          <img src={image} alt="bandeira" />
          <p>{ text}</p>
        </ContainerButton>
      </>
    )
  };
  