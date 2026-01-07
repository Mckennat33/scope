import React, { Children } from 'react'
import { useState } from 'react'

const SignUp = () => {
    const [userName, setUserName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

function handleSubmitForm(e) {
    e.preventDefault()
    const userSignUpInfo = {
        username: userName, 
        email: email, 
        password: password
    }

async function signUpUser() {
    const response = await fetch(URL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
            indclude: 'credentials'
        }, 
        body: JSON.stringify()
    })
}



    console.log(userSignUpInfo)
}



    return (
        <>
        <div className='sign-up-page'>
            <div className='sign-up-container'>
                <h1>Create Your Account</h1>
                <div className='form-container'>
                    <form className='form' action="" onSubmit={handleSubmitForm}>
                        <div className='user-signup'>
                            <div>
                                <label htmlFor="username"></label>
                                <input type="text" name="username" id="username" placeholder='Username' 
                                    onChange={(e) => {setUserName(e.target.value)}}
                                    />
                            </div>
                            <div>
                                <label htmlFor="email"></label>
                                <input type="email" name="email" id="email" placeholder='Email'
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    />
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <input type="password" name='password' id='password' placeholder='Password'
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    />
                            </div>
                        </div>
                        <div className='tier-container'>

                        </div>

                        <div className='tier-container'>
                            <div className='tier-free'>
                                <div className='free-header'>
                                    <h4>Free</h4>
                                </div>
                                <div className='free-notes'>
                                    <p>3 Articles per day</p>
                                    <p>Trending News access</p>
                                    <p>Limited comments</p>
                                    <p>Basic Newsletter</p>
                                    <button>Select Free</button>
                                </div>
                            </div>
                            <div className='tier-standard'>
                                <div className='standard-header'>
                                    <h4>Standard</h4>
                                </div>
                                <div className='standard-notes'>
                                    <p>10 articles per day</p>
                                    <p>Trending & reccomended</p>
                                    <p>Unlimited comments</p>
                                    <p>Daily newsletter</p>
                                    <button>Select Standard</button>
                                </div>
                            </div>
                            <div className='tier-premium'>
                                <div className='premium-header'>
                                    <h4>Premium</h4>
                                </div>
                                <div className='premium-notes'>
                                    <p>Umlimted articles</p>
                                    <p>Premium content</p>
                                    <p>Comments & save articles</p>
                                    <p>Exlusive newsletter</p>
                                    <button>Select Premium</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}


export default SignUp; 



