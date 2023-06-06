import { Lock } from "@mui/icons-material"
import { Button, TextField, Stack, InputAdornment } from "@mui/material"
import { Link } from 'react-router-dom'

const Signin = () => {
    return ( 
        <Stack justifyContent='center' alignItems="center">
            <form className="form"> 
                <h2>Welcome back...</h2>          
                <Stack spacing={2}>
                    <TextField label='email' type='email' size='small' />
                    <TextField 
                        label='password' 
                        type='password' 
                        size='small'
                        InputProps={{
                            endAdornment: 
                            <InputAdornment position='end' sx={{cursor: 'pointer'}}>
                                <Lock size='small' />
                            </InputAdornment>
                        }}
                    />
                    <p>Don't have an account? <Link to='/signup'>signup</Link> </p>
                    <Button className='btn'>signin</Button>
                </Stack>
            </form>
        </Stack>
     );
}
 
export default Signin;