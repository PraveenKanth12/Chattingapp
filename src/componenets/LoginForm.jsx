import { useState } from "react";
import axios from "axios";

const projectID="0f1ee53f-a017-4d62-9d68-f4146dfed6da";


function LoginForm() {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const authObject={'Project-ID':projectID, 'User-Name':userName, 'User-Secret':password};
        try{
            await axios.get('https://api.chatengine.io/chats', {headers:authObject});
            localStorage.setItem('userName', userName);
            localStorage.setItem('password',password);
            window.location.reload();
            setError('');
        }catch(err){
            setError("Oops, incorrect crendentials")
        }
    }
  return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} className="input" placeholder="username" required/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="password" required/>
                <div align="center">
                    <button className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>

            </form>
            <h1>{error}</h1>
        </div>
    </div>
  )
}

export default LoginForm