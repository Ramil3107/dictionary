import { Button, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"

export const PracticeAvailable = ({ words, startButtonHandler }) => {

    const styles = {
        title: {
            mb: 5,
            color: grey[600]
        }
    }

    return (
        <>
            <Typography
                sx={styles.title}
                variant="h5"
            >
                Check how many words you've already learned
            </Typography>
            <Button
                disabled={words.length < 10}
                onClick={startButtonHandler}
                variant="outlined"
                color="info"
                size="large"
            >
                Start Practice
            </Button>
        </>
    )
}
