import { Box, Button, Divider, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCounter, addCurrentGameRightAnswers, setRandomAnswers, setIsPracticeStarted } from "../../../redux/dictionarySlice"

export const Quiz = ({ randomWords, randomAnswers, counter }) => {

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
            display: "flex",
            flexWrap: "wrap",
            mt: 5,
        },
        divider: {
            color: "grey",
            width: "40%",
            mt: 1,
            mb: 1
        },
        clue: {
            border: "0.5px grey solid",
            borderRadius: 5
        }
    }

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
            <Typography color={grey[500]}>{counter + 1} of 10 questions</Typography>
            <Divider
                variant="middle"
                orientation="horizontal"
                sx={styles.divider}
            />
            <Typography variant="h2">{randomWords[counter]?.en}</Typography>
            <Divider
                variant="middle"
                orientation="horizontal"
                sx={styles.divider}
            />
            <Box sx={styles.clue}>
                <Typography
                    sx={{ p: 1 }}
                    color={grey[600]}
                >
                    select the correct translate
                </Typography>
            </Box>

            <Box sx={styles.buttons}>
                {
                    randomAnswers.map(answer => {
                        return <Button
                            sx={{ fontSize: 20, m: 3 }}
                            key={answer.uk}
                            onClick={() => handleAnswerButton(answer)}
                        >
                            {answer.uk}
                        </Button>
                    })
                }
            </Box>
        </Box>
    )
}
