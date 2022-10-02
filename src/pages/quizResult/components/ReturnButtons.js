import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const ReturnButtons = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100%" }}>
            <Button onClick={() => navigate("/mydictionary")} variant="outlined" >My Dictionary</Button>
            <Button onClick={() => navigate("/practice")} variant="outlined">Try Again</Button>
        </Box>
    )
}
