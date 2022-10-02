import { Box, Button, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNewHistory } from "../../redux/dictionarySlice"
import { currentDate } from "../../utils/utils"
import { CircularProgressBox } from "./components/CircularProgressBox"
import { ReturnButtons } from "./components/ReturnButtons"

export const QuizResult = () => {

    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            mt: 15
        },
        resultInfo: {
            color: blue[400],
            mt: 5,
            mb: 5
        }
    }

    const { currentGameRightAnswers, historyPrevLength, history } = useSelector(state => state.dictionary)
    const dispatch = useDispatch()

    useEffect(() => {
        const prevQuizHistory = {
            rightAnswers: currentGameRightAnswers,
            date: currentDate()
        }
        if (historyPrevLength === history.length) {
            dispatch(setNewHistory(prevQuizHistory))
        }
    }, [])

    return (
        <Box sx={styles.wrapper}>
            <Typography variant="h2">Your Result :</Typography>
            <Typography
                variant="h5"
                sx={styles.resultInfo}
            >
                {`You got ${currentGameRightAnswers} correct answers out of 10`}
            </Typography>

            <CircularProgressBox currentGameRightAnswers={currentGameRightAnswers} />
            <ReturnButtons />
        </Box>
    )
}
