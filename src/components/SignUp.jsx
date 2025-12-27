import React from 'react'
import { useState } from 'react'


function handleSubmitForm() {

}

const SignUp = () => {
    const [userName, setUserName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    
    return (
        <>
        <div className='sign-up-page'>

            <div className='sign-up-container'>
                <h1>Create Your Account</h1>
                <div className='form-container'>
                    <form action="" onSubmit={handleSubmitForm}>
                        <div>
                            <label htmlFor="username"></label>
                            <input type="text" name="username" id="username" placeholder='Username'  />
                        </div>
                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" placeholder='Email' />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="password" name='password' id='password' placeholder='Password'/>
                        </div>
                        <div className='tier-container'>

                        </div>
                    </form>
                </div>

                <div className='tier-container'>
                    <div className='tier-free'>
                        <p>Free</p>
                    </div>
                    <div className='tier-pro'>
                        <p>Pro</p>
                    </div>
                    <div className='tier-mega'>
                        <p>Mega</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default SignUp; 


