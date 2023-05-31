import { Grid, Button, Typography, Box, Stack } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import shopping from './images/shopping-illustration.jpeg'

const Hero = () => {
    const boxStyles = {
        borderRadius: '40px',
        paddingLeft:'18px',
        backgroundColor:'rgb(247, 216, 221)'
    }

    const btnStyles = {
        borderRadius: '20px',
        backgroundColor: 'skyblue',
        textTransform: 'lowercase',
        padding: '8px',
        width: '30%',
    }
    
    return ( 
        <Grid container my={4} spacing={2} >
            <Grid item xs={12} sm={7} p={2} >
                
                <Box 
                    width='180px' 
                    className='box' 
                    my={2} 
                    sx={boxStyles}
                    py={1.4}
                    >
                    <Typography color='text.secondary' variant='body2'>Super fast delivery</Typography>
                </Box>
                <Typography 
                    variant='h3' 
                    color='rgb(27, 27, 83)'
                    my={3}
                    fontWeight={600} >Ultimate online store for all your shopping needs</Typography>
                <Typography variant='body1' >Browse our curated collections, discover new products and enjoy fast delivery on every order.</Typography>
                <Stack direction='row' spacing={2} my={2}>
                    <Button startIcon = {<ShoppingBasketIcon />} variant="contained" sx={btnStyles}>Shop now</Button>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={5} mt={3}>
                <img src={shopping} alt='shopping-illustration' width='100%'/>
            </Grid>
            
        </Grid>
     );
}
 
export default Hero;