import { Lock } from "@mui/icons-material"
import { Button, TextField, Stack, InputAdornment, Grid } from "@mui/material"
import { Link } from 'react-router-dom'
import login from '../images/login.png'

const Signin = () => {
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}> 
                <img src={login} width='100%' />  
            </Grid>

            <Grid item xs={12} sm={6}>
                <form className="form"> 
                <h1>Welcome back</h1>  
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
                        <p>Don't have an account? <Link to='/signup'> signup</Link> </p>
                        <Button className='btn'>signin</Button>
                    </Stack>
                </form>
            </Grid>
        </Grid>

     );
}
 
export default Signin;