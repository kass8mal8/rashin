import { Box, Drawer } from "@mui/material";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const SideBar = ({ isOpen, setIsOpen }) => {
    
    return ( 
        <Drawer 
            anchor='left' 
            open={isOpen} 
            className="sidebar"
            onClose={ () => setIsOpen(false)} >
            <Box p={2} width={200} role='presentation' marginTop={3.5} >
                <Logo />
                <NavLinks />  
            </Box>
        </Drawer>
     );
}
 
export default SideBar;