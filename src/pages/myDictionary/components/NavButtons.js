import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const NavButtons = ({ words }) => {

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
            <Button
                onClick={() => navigate("/addwords")}
                size="large"
                variant="outlined">
                Add Words
            </Button>

            <Button
                disabled={words.length < 10}
                onClick={() => navigate("/practice")}
                size="large"
                variant="outlined">
                Practice
            </Button>
        </Box>
    )
}
