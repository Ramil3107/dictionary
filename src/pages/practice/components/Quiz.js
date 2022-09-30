import { Box, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCounter, addCurrentGameRightAnswers, setRandomAnswers, setIsPracticeStarted } from "../../../redux/dictionarySlice"

export const Quiz = () => {

    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            mt: 15
        },
        buttons: {
            display: "flex"
        }
    }

    const { randomWords, randomAnswers, counter } = useSelector(state => state.dictionary)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAnswerButton = (answer) => {
        if (counter >= 9) {
            dispatch(setIsPracticeStarted(false))
            navigate("/quizresult")
        }
        if (randomWords[counter].en === answer.en) {
            dispatch(addCurrentGameRightAnswers())
        }
        dispatch(setCounter())
        dispatch(setRandomAnswers())
    }

    return (
        <Box sx={styles.wrapper}>
            <Typography>{counter + 1} of 10 questions</Typography>
            <Typography variant="h3">{randomWords[counter]?.en}</Typography>
            <Box sx={styles.buttons}>
                {
                    randomAnswers.map(answer => {
                        return <Button key={answer.uk} onClick={() => handleAnswerButton(answer)} >{answer.uk}</Button>
                    })
                }
            </Box>
        </Box>
    )
}
