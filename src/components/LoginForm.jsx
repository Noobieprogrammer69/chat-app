import { useState } from 'react';
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

    }

    return (
        <div classNmae="wrapper">
            <div className="form">
                <h1 classNmae="title">MyChat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </form>
            </div>
        </div>
    )
}