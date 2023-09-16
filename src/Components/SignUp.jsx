import Button from "./Button"
import { useState } from "react"

export default function SignUp() {
    const [status, setStatus] = useState('typing') // submiting, error
    const [email, setEmail] = useState('');

    function handleChange(e) {
        setEmail(e.target.value);
    }
    
    function checkEmail(email) {
        
    }

    return (
       <div>
            <h1>Stay updated!</h1>

            <p> Join 60,000+ product managers receiving monthly updates on:</p>

            <p>
                Product discovery and building what matters
                Measuring to ensure updates are a success
                And much more!
            </p>

            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="email@company.com" onChange={handleChange}/>
            <p>{email}</p>

            <Button 
            disabled={email.length === 0 || status === 'submiting'} 
            text={ 'Subscribe to monthly newsletter' } 
            />
            
       </div>
    )
}