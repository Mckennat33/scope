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
                    <input type="text" />
                </div>
            </form>
        </>
    )
}


export default SignUp; 