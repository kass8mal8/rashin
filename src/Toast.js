import { Snackbar } from '@mui/material'
import MuiAlert from "@mui/material/Alert"
import { forwardRef } from 'react'

const Alert = forwardRef( function Alert(props, ref) {
	return <MuiAlert elevation={2} ref={ref} {...props} />
})

const Toast = ({ error, data, handleClose, open }) => {
    return (  
        <Snackbar 
            open={open} 
            onClose={handleClose} 
            autoHideDuration={4000}
            >
            <Alert severity={ error ? 'error' : 'success' } onClose={handleClose}  > 
                { data?.message ? data.message : error }
            </Alert>
        </Snackbar>
    );
}
 
export default Toast;