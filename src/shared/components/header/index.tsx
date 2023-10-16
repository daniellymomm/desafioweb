import { ContainerHeader, ContainerLogo } from "./style";
import Logo from "../../../assets/image1.png";

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <img src={Logo} alt="Logo StackX" />
      </ContainerLogo>
    </ContainerHeader>
  );
};