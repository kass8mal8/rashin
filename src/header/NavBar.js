import { useState, useContext, useEffect } from 'react'
import { 
    IconButton, 
    Stack, 
    AppBar, 
    Toolbar, 
    Avatar,
    Badge
} from '@mui/material'

import { 
    ShoppingCartOutlined, 
    MenuOutlined, 
    AccountCircle 
} from '@mui/icons-material'

import logo from '../images/rashin-logo.png'
import SideBar from './SideBar';
import NavLinks from './NavLinks'
import { userContext } from '../App';

const NavBar = () => {
    const viewport = document.body.clientWidth
    const [isOpen, setIsOpen] = useState(false)
    const [ initial, setInitial ] = useState("")

    const user = useContext(userContext)

    useEffect(() => {
        user && setInitial(user[0])
    }, [user]);
    const x = initial && initial.first_name.slice(0, 1).toUpperCase()

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
                <h3 style={{ flexGrow: 1}}></h3>

                <NavLinks />
                { viewport <= 425 ? 
                <Stack direction='row' >
                    
                    <IconButton sx={{marginRight: '10px'}}>
                        <Badge badgeContent={2} color='primary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                    
                    {initial ? <Avatar variant='circled' size='small' sx={{backgroundColor: 'purple'}}> {x} </Avatar>:<IconButton edge='end'> <AccountCircle />  </IconButton>}
                    <SideBar isOpen={isOpen}  setIsOpen={setIsOpen} />
                </Stack> : ' ' 
                }
            </Toolbar>
        </AppBar>
     );
}
 
export default NavBar;