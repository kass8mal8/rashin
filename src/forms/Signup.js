import { Stack, TextField, InputAdornment, Button } from '@mui/material'
import PasswordIcon from '@mui/icons-material/Password'
import { } from "@mui/icons-material"

const Signup = () => {
    const viewport = document.body.clientWidth
    
    return (  
        <form className='form'>
            <Stack direction= { viewport >= 425 ? 'row' : 'column' } spacing={1.5}>
                <TextField label='first name' size='small' required />
                <TextField label='last name' size='small' required />
            </Stack>

            <Stack spacing={1.5} marginTop={1.5}>
                <TextField label='email' size='small' />
                <TextField 
                    label='password'
                    size='small' 
                    InputProps={{
                        endAdornment: <InputAdornment position='end'> <PasswordIcon /></InputAdornment>
                    }} />
                <Button variant='contained' disableElevation className='btn' borderRadius='40px' >signup</Button>
            </Stack>
        </form>
    );
}
 
export default Signup;