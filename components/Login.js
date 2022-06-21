import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react"
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import { SSRProvider } from 'react-bootstrap';

const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ flag, setFlag ] = useState(true);
    const router = useRouter();

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    } 

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const URL = 'http://localhost:8000/users/login'
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'x-www-form-urlencoded',
    }

    const submit= async(e) =>{
        e.preventDefault();
        
        try {
            const user = `${username}:${email}`
            var data = new FormData();
            data.append('username', user);
            data.append('password', password);
//            data = {
//                'name': username,
//                'email': email,
//                'password': password
//            }
            await axios.post(
                URL, data, {
                    headsers: {headers}
                }
            ).then(res => {
                localStorage.setItem('token', res.data.access_token)                
                router.push({pathname: "/", query: {'user': username}})
            })
        } catch(err){
            if (err.response.status == 404){
               setMessage(err.response.data.detail)
            }else{
               setMessage('System Error has occured')
            }
            
            setFlag(false)
        }
    }
    
    return (
        <SSRProvider>
        <div>
            {
                flag ? <h1>ログインして下さい。</h1>
                :
                <h1>{message}</h1>
            }
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" value={username}
                        onChange={onChangeUsername}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>EMail</Form.Label>
                    <Form.Control type="text" placeholder="Enter your EMail" value={email}
                        onChange={onChangeEmail}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="text" placeholder="Enter your password" value={password}
                        onChange={onChangePassword}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
        </SSRProvider>
    );
}

export default Login;