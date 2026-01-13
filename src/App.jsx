import logo from './logo.svg'
import './App.css';
import Error from './components/Error'
import Home from './pages/Home'
import Header from './components/Header';
import Loader from './components/Loader'
import NewsCard from './components/NewsCard'
import NewsList from './components/NewsList'
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Profile from './pages/Profile'

// do I want to add a sidepanel for maybe world news? 

function App() {
  const [ loggedIn, setLoggedIn ] = useState(true)

  // if user is not loggin in - return sign up page
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {loggedIn ? (
                <Route path='/home' element={<Home />} />
              ) : (
                <Route path="/" element={<SignUp />} />
              )
            } 
          <Route path='/profile' element={<Profile />} />
        </Routes> 
      </BrowserRouter>
    </div>
  



    // <div className="App">
    //   <header className="App-header">
    //     <Header />
        
    //     <Error />
    //     <Loader />
    //     <NewsList />
    //   </header>
    // </div>
  );
}

    
export default App;
