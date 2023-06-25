import { 
    Card,
    CardContent, 
    CardMedia, 
    Grid, 
    IconButton, 
    Stack 
} from "@mui/material";
import af1 from "./images/af1.jpg"
import { AddShoppingCart } from "@mui/icons-material";
import React, { useState, useEffect } from 'react';
import MuiSkeleton from "./Skeleton";

const Collection = () => {
    const items = [
        {
            id: 1,
            name: 'AF1',
            price: '2500',
            src: af1,
        },
        {
            id: 2,
            name: 'J1',
            price: '2800',
            src: af1,
        },
        {
            id: 3,
            name: 'Ajab Unga',
            price: '800',
            src: af1,
        },
        {
            id: 4,
            name: 'Pishori Rice',
            price: '300',
            src: af1,
        }
    ]

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    }, []);
    return ( 
        <Grid container spacing={2} mt={1} mr={2}>
            {items.map(item => (
                <Grid item xs={6} sm={3} key={item.id}>
                    {loading ? <MuiSkeleton /> : <Card elevation={0}>
                        
                        <CardMedia>
                            <img src={item.src} alt="product" width="100%" />
                        </CardMedia>
                        <CardContent>
                            <h3 style={{marginTop: '-5px', color: 'orange'}}>{item.name}</h3>
                            <Stack direction='row' spacing={1} sx={{marginTop: '-15px'}}>
                                <p style={{ fontWeight: '600'}}>{item.price}</p>
                                <IconButton >
                                    <AddShoppingCart sx={{borderWidth: '1px', borderStyle: 'solid', borderRadius: '10px', padding: '5px', backgroundColor: 'lightgray', color: 'whitesmoke'}} />
                                </IconButton>
                            </Stack>
                        </CardContent>                 
                        
                    </Card>  }    
                </Grid>
            ))}    
        </Grid>
     );
}
 
export default Collection;