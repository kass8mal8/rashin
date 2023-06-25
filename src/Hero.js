import { 
    Grid, 
    Button,   
    Stack,
} from "@mui/material";

import {
    TimerOutlined, 
    ShoppingBasket,
    CheckCircle
} from '@mui/icons-material';

import hero from './images/hero.jpg';
// import hero from './images/shopping-illustration.jpeg'

const Hero = () => {
    const viewport = document.body.clientWidth
    
    return ( 
        <Grid container my={4} spacing={2} flexDirection={ viewport >= 425 ? 'row' : 'column-reverse'} >
            <Grid item xs={12} sm={7} p={2} >
                <Stack 
                    width='200px' 
                    className='box' 
                    my={2} 
                    direction='row'
                    spacing={2}
                    py={1.4}
                    >
                    Super fast delivery  <TimerOutlined color='primary' />
                </Stack>
                
                <h2>Ultimate online store for all your needs</h2>
                <p>Browse our curated collections, discover new products and enjoy fast delivery on every order.</p>
                <Stack direction='row' spacing={2} my={2}>
                    <Button startIcon = {<ShoppingBasket />} variant="contained" className='btn-shop' >Shop now</Button>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={4} mt={5} >
                <Stack className='checks' direction='row' spacing={1.5}>
                    <CheckCircle sx={{color:"orange"}} />
                    <p>Delivery Complete</p>
                </Stack>
                <img src={hero} alt='shopping-illustration' width='100%'/>
            </Grid>
            
        </Grid>
     );
}
 
export default Hero;