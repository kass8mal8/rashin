import { Link, useNavigate } from 'react-router-dom';
import { Button, Stack, IconButton } from '@mui/material'
import { Category, Home, PhoneAndroid } from "@mui/icons-material"
import { useContext } from 'react'

const NavLinks = () => {
    const navigate = useNavigate()
    const viewport = document.body.clientWidth

    return ( 
        <Stack direction={ viewport >= 425 ? 'row' : 'column' } spacing={2} className='links'  >
            <Stack direction='row'>
                <IconButton className='nav-icon'> <Home /> </IconButton>
                <Link to='/'>Home</Link>
            </Stack>
            <Stack direction='row'>
                <IconButton className='nav-icon'> <Category /> </IconButton>
                <Link to='/collections'>collections</Link>
            </Stack>
            <Stack direction='row'>
                <IconButton className='nav-icon'> <PhoneAndroid /> </IconButton>
                <Link to='/contact'>contact</Link>
            </Stack>     
            <Button 
                variant='contained' 
                className='btn' 
                onClick={() => navigate('/signin')}>signin</Button>  
        </Stack>
     );
}
 
export default NavLinks;