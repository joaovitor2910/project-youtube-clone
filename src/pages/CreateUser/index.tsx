import { useContext, useState } from "react"
import { ContextStorage } from "../../context/loginContext"

import GoogleLogo from '../../assets/google-logo.png'
import { useNavigate } from "react-router-dom"
import { ButtonCreate, ButtonLogin, ContainerLogin, GoogleContainer, LoginContent, LogoGoogle } from "../../components/login/styles"
import { CreateUserContext } from "../../context/createUserContext"

function Cadastro(){
    const { handleCreate } = useContext(CreateUserContext)
    const [createName, setCreateName] = useState('')
    const [createEmail, setCreateEmail] = useState('')
    const [createPassword, setCreatePassword] = useState('')
    const navigateCreateToLogin = useNavigate()

    const cadastrado = () => {
        navigateCreateToLogin('/login');
        handleCreate(createName, createEmail, createPassword)
    }
    return(
        <ContainerLogin>
            <LoginContent>
                <GoogleContainer>
                    <LogoGoogle src={GoogleLogo}/>
                    <span style={{fontSize:'23px'}}>Criar usuário</span>
                    <span style={{fontSize: '17px'}}>Prosseguir no YouTube</span>
                </GoogleContainer>

                <form>
                    <input type="text" placeholder="Nome" value={createName} onChange={(e) => setCreateName(e.target.value)} />

                    <input type="email" placeholder="E-mail" value={createEmail} onChange={(e) => setCreateEmail(e.target.value)} />

                    <input type="password" placeholder="Senha" value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} />
                </form>
                
                <div style={{width: '90%', height: '20px', display: 'flex', alignItems: 'center'}}>
                    <input style={{width: '14px', height: '14px'}} type="checkbox"/>
                    <p>Mostrar senha</p>
                </div>

            <div style={{display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '20px', alignItems: 'center'}}>
                <ButtonCreate onClick={() => cadastrado()}>Criar conta</ButtonCreate>
                
            </div>
            </LoginContent>
        </ContainerLogin>
    )
}

export default Cadastro