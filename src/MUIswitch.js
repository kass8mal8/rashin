import { Box, Switch, FormControlLabel } from '@mui/material'
import { useState } from 'react';

const MUIswitch = () => {
    const [checked, setChecked] = useState(null)
    const handleChange = (e) => {
        setChecked(e.target.checked)
    }


    return ( 
        <Box>
            <FormControlLabel 
                label='darkmode'
                control={<Switch checked={checked} onChange={handleChange}/>} />
        </Box>
     );
}
 
export default MUIswitch;