import { Botao } from "../botao"
import { ContainerFooter } from "./style"
import brazil from "../../../assets/brazil-flag.png"
import english from "../../../assets/united-states-flag.png"
import french from "../../../assets/french-flag.png"
import { IFooter} from "../../../types"



export const Footer = ({ languages}:IFooter) => {
    return(
        <ContainerFooter>
            <Botao image={brazil} text="Português" languages={ languages} />
            <Botao image={french} text="Francês" languages={languages}/>
            <Botao image={english}  text="Inglês" languages={ languages}/>
        </ContainerFooter>

    )
}