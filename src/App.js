import './styles/css/app.css';
import { Stack } from '@mui/material';
import NavBar from './header/NavBar';
import { Routes, Route } from 'react-router'
import Home from './Home';
import Signup from './forms/Signup';
import { createContext, useState, useEffect } from 'react';
import Signin from './forms/Signin';
import useFetch from './hooks/useFetch';
import Collection from './Collection';

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

	useEffect(() => {
		const cookies = document.cookie.split(';');
		const jwtCookie = cookies.find(cookie => cookie.trim().startsWith('jwt='));
	  
		if (users && jwtCookie) {
		  const token = jwtCookie.split('=')[1];
		  setUser(users.filter(user => user._id === token));
		}
	}, [users]);
	  

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
					<Route 
						path='/signin' 
						element={<Signin setIsAuthenticated={setIsAuthenticated} />}
					/>
					<Route path='/collections' element={<Collection />} />

				</Routes>
			</Stack>
	</userContext.Provider>
	
  )
}

export default App;
