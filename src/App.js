import React, {useState} from 'react';


import {Container, Logo, Header, Button,ContainerItens,H1,Image,CardContainer,Card,Registerdiv} from './styles';
import logoDente from './assets/odonto-dent.png'
import sorrisoBranco from './assets/sorriso-branco.png'
import consultaDente from './assets/dentaria-clinica.png'
import odontoLogico from './assets/Odonto Implantes 1.png'
import atendimentoDent from './assets/atendimento-denti.png'

function App(){

    const [showRegisterDiv, setShowRegisterDiv] = useState(false);
     
    const handleRegisterButtonClick = () => {
        setShowRegisterDiv(true);
      };


    return(
     
     <Container>
     <Header>
     <div> <Logo> <img src={logoDente} alt="dentista-odontologia" /></Logo></div>
     
     <ul>
     <li style={{ borderBottom: '4px solid #033495' }}>Contact</li>
     <li>About</li> 
     <li>Services</li> 
     </ul>   
    
    <div><Button onClick={handleRegisterButtonClick}>Register</Button></div>
    {showRegisterDiv && 
     <Registerdiv>
      <h1>Create New Account</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Passaword" />
      <button>Register</button>
      </Registerdiv>}
    </Header>

    <ContainerItens>
    <H1>We have flossify on how to
    Keep your smile
    clean & great
    <button>Choose</button>
    </H1>
    <Image src={atendimentoDent} alt="dentista-dente"></Image>
    </ContainerItens>
    <h2>Our Main Services</h2>
    <p>Dental radiology, extremely important for dental diagnosis and treatment as it is essential for dental evaluation and history.</p>
    
    <CardContainer>
    <Card>
       <img src={ sorrisoBranco} alt='sorriso-super-branco'></img>
        <h3>Endodontia</h3>
        <p>Dental root canal treatment consists of removing the pulp of the tooth.</p>
        <button>know more</button>
       </Card>
        
       <Card>
        <img src={consultaDente} alt='consulta-medica'></img>
        <h3>Dental implants</h3>
        <p>They are artificial titanium roots that can be installed.</p>
        <button>know more</button>
        </Card>
        
        <Card>
        <img src={odontoLogico} alt='manutenção-aparelho'></img>
        <h3>Oral Surgery</h3>
        <p>impacted wisdom teeth, cysts, etc roots that can be installed.</p>
        <button>know more</button>
        </Card>
        </CardContainer>
    
        </Container>
        
)}

export default App;