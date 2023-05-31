import { IconButton, Stack, Button, AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()
    
    return (        
        <AppBar elevation={0} position='static' className="navbar" sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                <IconButton edge='start' aria-label='logo' color='primary' >
                    <img src={logo} width='60px' alt='logo' />
                </IconButton>
                <Typography 
                    variant='h6' 
                    component='div' 
                    sx={{ flexGrow: 1}} 
                    fontWeight={600}
                    color='rgb(16, 99, 85)'>Rashin</Typography>

                <Stack direction='row' spacing={2} className='links'  >
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>shop</Link>
                    <Link to='/contact'>contact</Link>  
                    <Button 
                        variant='contained' 
                        className='btn' 
                        onClick={() => navigate('/signup')}>signup</Button>  
                </Stack>
            </Toolbar>
        </AppBar>
     );
}
 
export default NavBar;