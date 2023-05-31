import './styles/css/app.css';
import { Stack } from '@mui/material';
import NavBar from './header/NavBar';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Home from './Home';
import Signup from './forms/Signup';

const App = () => {
  return (
    <Stack className='container'>
    
	<BrowserRouter>
		<NavBar />	
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/signup' element={<Signup />} />
		</Routes>
	</BrowserRouter>
	</Stack>
  )
}

export default App;
