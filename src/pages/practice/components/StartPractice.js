import { Box, Button, Typography } from "@mui/material"
import { grey, lime } from "@mui/material/colors"
import { useDispatch } from "react-redux"
import { removePrevQuizState, setHistoryPrevLength, setIsPracticeStarted, setRandomAnswers, setRandomWords } from "../../../redux/dictionarySlice"

export const StartPractice = () => {

    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
        },
        title: {
            mb: 5,
            color: grey[600]
        }
    }

    const dispatch = useDispatch()

    const startButtonHandler = () => {
        dispatch(removePrevQuizState())
        dispatch(setRandomWords())
        dispatch(setRandomAnswers())
        dispatch(setIsPracticeStarted(true))
        dispatch(setHistoryPrevLength())
    }

    return (
        <Box sx={styles.wrapper}>
            <Typography
                sx={styles.title}
                variant="h5"
            >
                Check how many words you've already learned
            </Typography>
            <Button
                onClick={startButtonHandler}
                variant="outlined"
                color="secondary"
                size="large"
            >
                Start Practice
            </Button>
        </Box>
    )
}
