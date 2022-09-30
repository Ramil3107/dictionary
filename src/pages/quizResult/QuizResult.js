import { Box, CircularProgress, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { useSelector } from "react-redux"


export const QuizResult = () => {

    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            mt: 15
        }
    }

    const rightAnswers = useSelector(state => state.dictionary.currentGameRightAnswers)

    const progressInPercents = (correct, total) => {
        return correct * 100 / total
    }

    return (
        <Box sx={styles.wrapper}>
            <Typography variant="h2">Your Result :</Typography>
            <Typography variant="h5" sx={{ color: blue[400], mt: 5, mb: 5 }}>{`You got ${rightAnswers} correct answers out of 10`}</Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress size={200} variant="determinate" value={progressInPercents(rightAnswers, 10)} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        fontSize={50}
                        variant="caption"
                        component="div"
                        color={blue[400]}
                    >{`${progressInPercents(rightAnswers, 10)}%`}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
