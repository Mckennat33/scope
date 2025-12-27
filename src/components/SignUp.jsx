import React from 'react'
import { useState } from 'react'


function handleSubmitForm() {

}

const SignUp = () => {
    const [ userData, setUserData ] = useState({
        firstName: '',
        lastName: '', 
        userEmail: '', 
        password: ''
    })

    return (
        <>
            <h1>Sign Up Page</h1>
            <form action="" onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name='first name' />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="" />
                </div>
                <div>
                    <label htmlFor="">Passwork</label>
                    <input type="password" name='password'/>
                </div>
                <div className='tier-container'>

                </div>
            </form>
        </>
    )
}


export default SignUp; 


