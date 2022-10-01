import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const NavButtons = () => {

    const styles = {
        buttons: {
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 5
        }
    }

    const navigate = useNavigate()

    return (
        <Box sx={styles.buttons}>
            <Button onClick={() => navigate("/addwords")} size="large" variant="outlined">Add Words</Button>
            <Button onClick={() => navigate("/practice")} size="large" variant="outlined">Practice</Button>
        </Box>
    )
}
