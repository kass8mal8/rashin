import { Stack, TextField, InputAdornment, Button, Grid, } from '@mui/material'
import { useState } from 'react'
import signup from '../images/signup-illustration.jpeg'
import usePost from '../hooks/usePost'
import Toast from '../Toast'
import { Link } from 'react-router-dom'
import { Google, VisibilityOffOutlined, Visibility } from '@mui/icons-material'
import Cookies from 'universal-cookie'

const Signup = ({open, setOpen, handleClose, setIsAuthenticated}) => {
    const viewport = document.body.clientWidth
    const [ clicked, setClicked ] = useState(false)
    const url = 'http://localhost:5000/auth/signup'
    const {post, error, loading, data} = usePost(url)

    const cookies = new Cookies()
    const options = {
        path: '/',
        maxAge: 24 * 60 * 60 // 1 day
    }

    const [ userData, setUserData ] = useState(null)
    const handleChange = (e) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(userData)
        data && setIsAuthenticated(true)
        setOpen(true)
        cookies.set('jwt', data !== null && data.token, options)
    }
    
    return (  
        <Grid container spacing={2} marginTop={3} >
            <Grid item xs={12} sm={7}>
                <img src={signup} width='70%' alt='illustration' className='img' />
            </Grid>

            <Grid item xs={12} sm={5}>
                <form className='form' onSubmit={handleSubmit} >
                    <Toast 
                        error={error} 
                        data={data} 
                        open={open} 
                        handleClose={handleClose} 
                    /> 

                    <Button startIcon={ <Google /> } variant='contained' my={2} sx={{textTransform: 'capitalize', width: '100%', marginBlock: '16px'}} >Continue with Google</Button>
                    <p style={{textAlign:'center', marginTop: '-5px'}}>OR</p>
                    <Stack direction='row' spacing={1.5} >
                        <TextField 
                            label='first name' 
                            size='small' 
                            required 
                            className='input'
                            name='first_name'
                            onChange={handleChange}
                        />
                        <TextField 
                            label='last name' 
                            size='small' 
                            required 
                            name='last_name'
                            onChange={handleChange}
                            className='input' 
                        />
                    </Stack>

                    <Stack spacing={1.5} marginTop={1.5} >
                        <TextField 
                            label='email' 
                            size='small' 
                            required 
                            name='email'
                            onChange={handleChange}
                            className='input' 
                        />
                        <TextField 
                            label='password'
                            type={ clicked ? 'string' : 'password' }
                            size='small' 
                            required
                            name='password'
                            onChange={handleChange}
                            className='input'
                            InputProps={{
                                endAdornment: 
                                <InputAdornment position='end' sx={{ cursor: 'pointer'}}> 
                                    { !clicked ? 
                                        <Visibility onClick={() => setClicked(true)} /> : 
                                        <VisibilityOffOutlined onClick={() => setClicked(false)} />
                                    }
                                </InputAdornment>
                            }} 
                        />
                        <p>Already have an account? <Link to='/signin'>signin</Link> </p>
                        <Button 
                            variant='contained' 
                            disableElevation 
                            className='btn' 
                            type='submit'
                            borderRadius='40px' >signup
                        </Button>
                    </Stack>
                    
                </form>
            </Grid>

        </Grid>
    );
}
 
export default Signup;