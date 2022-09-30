import { Box, Button } from "@mui/material"
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
