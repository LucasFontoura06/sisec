import {FaUser, FaLock} from "react-icons/fa"

import { useState } from "react"

import "./loginEstilo.css"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const hadleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);
    };


    return (
        <div className="container1">
            <div className="container2">
                <form onSubmit={hadleSubmit}>
                    <h1>SISMOC</h1>
                    <div className="input-field">
                        <input type="user" placeholder="Usuário" required onChange={(e) => setUsername(e.target.value)}/>
                        <FaUser className="icon" />
                        
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)}/>
                        <FaLock className="icon" />
                    </div>

                    <div className="recall-forget">
                        <label htmlFor="">
                            <input type="checkbox" />
                            Lembrar de mim?
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <button>Entrar</button>

                    <div className="signup-link">
                        <p>Não tem uma conta? <a href="#">Registrar</a></p>
                    </div>


                    

                </form>
                
            </div>
        </div>
        
    )
}

export default Login