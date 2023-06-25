import logo from '../images/rashin-logo.png'
import { Typography, Stack } from "@mui/material";

const Logo = () => {
    const img = {
        marginTop: '-20px'
    }

    return ( 
        <Stack direction='row' spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomWidth: '1px', borderColor: 'gray' }}>
            <img src={logo} width='100px' alt='logo' style={img} />
        </Stack>
     );
}
 
export default Logo;