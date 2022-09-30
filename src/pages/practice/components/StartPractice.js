import { Box, Button, Typography } from "@mui/material"
import { grey, lime } from "@mui/material/colors"
import { useDispatch } from "react-redux"
import { removePrevQuizState, setIsPracticeStarted, setRandomAnswers, setRandomWords } from "../../../redux/dictionarySlice"

export const StartPractice = () => {

    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
        }
    }

    const dispatch = useDispatch()

    const startButtonHandler = () => {
        dispatch(removePrevQuizState())
        dispatch(setRandomWords())
        dispatch(setRandomAnswers())
        dispatch(setIsPracticeStarted(true))
    }

    return (
        <Box sx={styles.wrapper}>
            <Typography sx={{mb:5, color: grey[600]}} variant="h5">Check how many words you have already learned</Typography>
            <Button
                onClick={startButtonHandler}
                variant="outlined"
                color="secondary"
                size="large">
                Start Practice
            </Button>
        </Box>
    )
}
