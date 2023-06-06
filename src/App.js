import './styles/css/app.css';
import { Stack } from '@mui/material';
import NavBar from './header/NavBar';
import { Routes, Route } from 'react-router'
import Home from './Home';
import Signup from './forms/Signup';
import { createContext, useState } from 'react';
import Signin from './forms/Signin';
import useFetch from './hooks/useFetch';

export const userContext = createContext()

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [open, setOpen] = useState(false)
	const [user, setUser] = useState({})
	const url = 'http://localhost:5000/users'

	const handleClose = (e, reason) => {
		if (reason === "clickaway") return
		setOpen(false)
	}

	const { data: users, loading, error } = useFetch(url)
    //users && console.log(users)

    const cookies = document.cookie.split(';');
    const jwtCookie = cookies.find(cookie => cookie.trim().startsWith('jwt='));
    
    if(users) {
        if(jwtCookie) {
            const token = jwtCookie.split('=')[1];
            const elem = users.filter( user => user._id === token)
            setUser(elem)
        }
    }

  return (
	<userContext.Provider value={user} >
			<Stack className='container'>
				<NavBar />	
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signup' element={<Signup 
						setIsAuthenticated={setIsAuthenticated}
						open={open}
						setOpen={setOpen}
						handleClose={handleClose} />} />
					<Route path='/signin' element={<Signin  setIsAuthenticated={setIsAuthenticated} />} />
				</Routes>
			</Stack>
	</userContext.Provider>
	
  )
}

export default App;
