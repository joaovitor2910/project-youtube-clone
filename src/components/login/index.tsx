import { useContext, useState } from "react"
import { ContextStorage } from "../../context/loginContext"
import {  ButtonCreate, ButtonLogin, ContainerLogin, GoogleContainer, LoginContent, LogoGoogle } from "./styles"
import GoogleLogo from '../../assets/google-logo.png'
import { useNavigate } from "react-router-dom"

function Login(){
    const { handleLogin } = useContext(ContextStorage)
    const navigateHome = useNavigate()
    const logar = () => {
        navigateHome('/')
        handleLogin(email, password)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigateCadastro = useNavigate()
    return(
        <ContainerLogin>
            <LoginContent>
                <GoogleContainer>
                    <LogoGoogle src={GoogleLogo}/>
                    <span style={{fontSize:'23px'}}>Fazer login</span>
                    <span style={{fontSize: '17px'}}>Prosseguir no YouTube</span>
                </GoogleContainer>

                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <div style={{width: '90%', height: '20px', display: 'flex', alignItems: 'center'}}>
                    <input style={{width: '14px', height: '14px'}} type="checkbox"/>
                    <p>Mostrar senha</p>
                </div>

            <div style={{display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '20px', alignItems: 'center'}}>
                <ButtonCreate onClick={() => navigateCadastro('/cadastro')}>Criar conta</ButtonCreate>
                <ButtonLogin onClick={() => logar() }>Próxima</ButtonLogin>
            </div>
            </LoginContent>
        </ContainerLogin>
    )
}

export default Login