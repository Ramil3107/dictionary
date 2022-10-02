import { Box, Typography } from "@mui/material"


export const EmptyState = () => {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 10 }}>
            <Typography color="text.secondary" variant="h5">You don't have words in the dictionary!</Typography>
        </Box>
    )
}
