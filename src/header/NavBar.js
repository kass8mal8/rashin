import { useState, useContext } from 'react'
import { 
    IconButton, 
    Stack, 
    AppBar, 
    Toolbar, 
    Avatar
} from '@mui/material'

import { 
    ShoppingCartOutlined, 
    MenuOutlined, 
    AccountCircle 
} from '@mui/icons-material'

import logo from '../images/rashin-logo.png'
import SideBar from './SideBar';
import NavLinks from './NavLinks'
import useFetch from '../hooks/useFetch';
import { userContext } from '../App';

const NavBar = () => {
    const viewport = document.body.clientWidth
    const [isOpen, setIsOpen] = useState(false)

    const pst = {
        fontSize: '16px',
        color: 'gray',
        marginLeft: '10px'
    }
    const user = useContext(userContext)
    // console.log(user)
    

    return (        
        <AppBar elevation={0} position='sticky' className="navbar" sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                {viewport >= 425 ? 
                <IconButton edge='start' aria-label='logo' color='primary' >
                    <img src={logo} width='100px' alt='logo' />
                </IconButton>:
                <IconButton edge='start' className='btn-drawer' onClick={() => setIsOpen(true) } >
                    <MenuOutlined  />
                </IconButton>}
                
                {/* { user && <Avatar variant='circled'> {user.first_name} </Avatar> } */}
                <h3 style={{ flexGrow: 1}}></h3>

                <NavLinks />
                { viewport <= 425 ? 
                <Stack direction='row' >
                    <IconButton> <ShoppingCartOutlined /> </IconButton>
                    <IconButton edge='end'> <AccountCircle />  </IconButton>
                    {/* <p style={pst}>username</p> */}
                    <SideBar isOpen={isOpen}  setIsOpen={setIsOpen} />
                </Stack> : ' ' 
                }
            </Toolbar>
        </AppBar>
     );
}
 
export default NavBar;