import { useState } from "react";
import { Footer } from "../../shared/components/footer";
import { Header } from "../../shared/components/header";
import { TechList } from "../../shared/components/lista";
import { Container_content, Apresentacao } from "./style";




export const Home = () => { 

    
    const idioma = [{
        en: "Hi, my name`s Danielly Momm and I`m a Front-End Developer, Technologies that I have experience:",
        pt: "Olá, meu nome é Danielly Momm e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
        fr:"Bonjour, je m'appelle Danielly Momm et je suis développeur Front-End, Technologies j'ai de l'expérience:"
    }]

    
   

    const [language, setLanguage] = useState(idioma[0].pt)

    const handleLanguage=(Text:string) => {
        
        if (Text == 'Português') {
            setLanguage(idioma[0].pt) 
        } else if (Text == 'Francês') {
            setLanguage(idioma[0].fr)
        } else {
            setLanguage(idioma[0].en)  
        }
       
    }
    
    return (
        <>
            <Header /> 
            <Container_content>
            <Apresentacao>
                    {language}
            </Apresentacao>
                <TechList  />
           </Container_content>
            <Footer languages={handleLanguage} />
           
        </>

    )
}