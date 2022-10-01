import { Button, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import { useNavigate } from "react-router-dom"

export const PracticeNotAvailable = () => {
    const styles = {
        title: {
            mb: 5,
            color: red[300]
        }
    }

    const navigate = useNavigate()

    return (
        <>
            <Typography
                sx={styles.title}
                variant="h5"
            >
                You need at least 10 words in the dictionary
            </Typography>
            <Button
                onClick={() => navigate("/addwords")}
                variant="outlined"
                color="info"
                size="large"
            >
                Add Words
            </Button>
        </>
    )
}
