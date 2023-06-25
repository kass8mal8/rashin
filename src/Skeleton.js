import { Skeleton, Stack } from '@mui/material'

const MuiSkeleton = () => {
    return ( 
        <>
            <Skeleton 
                variant='rectangle' 
                animation='wave' 
                width='100%' 
                height='130px' 
            />
            <Skeleton 
                variant='text'
                animation='wave'
                width='50%'
                height='30px'
            />
            <Stack direction='row' spacing={1}>
                <Skeleton
                    variant='text'
                    width='70%'
                    animation='wave'
                    height='30px'
                />
                <Skeleton 
                    variant='rectangle'
                    width='20%'
                    animation='wave'
                    height='30px'
                    sx={{borderRadius: '10px', marginLeft: '30px'}}
                />
            </Stack>
        </>
     );
}
 
export default MuiSkeleton;