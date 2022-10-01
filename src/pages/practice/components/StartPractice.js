import { Box } from "@mui/material";
import { useDispatch } from "react-redux"
import { removePrevQuizState, setHistoryPrevLength, setIsPracticeStarted, setRandomAnswers, setRandomWords } from "../../../redux/dictionarySlice"
import { PracticeAvailable } from "./PracticeAvailable"
import { PracticeNotAvailable } from "./PracticeNotAvailable"

export const StartPractice = ({ words }) => {

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
        dispatch(setHistoryPrevLength())
    }

    return (
        <Box sx={styles.wrapper}>
            {words.length >= 10 && <PracticeAvailable words={words} startButtonHandler={startButtonHandler} />}

            {words.length < 10 && <PracticeNotAvailable />}
        </Box>
    )
}
