import { Box, CircularProgress, Typography } from "@mui/material"

export const circularProgressBox = ({ currentGameRightAnswers }) => {

    const styles = {
        circularProgressBox: {
            position: 'relative',
            display: 'inline-flex'
        },
        circularProgressIncideTextBox: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    const progressInPercents = (correct, total) => {
        return correct * 100 / total
    }

    return (
        <Box sx={styles.circularProgressBox}>
            <CircularProgress
                size={200}
                variant="determinate"
                value={progressInPercents(currentGameRightAnswers, 10)}
            />
            <Box
                sx={styles.circularProgressIncideTextBox}
            >
                <Typography
                    fontSize={50}
                    variant="caption"
                    component="div"
                    color={blue[400]}
                >
                    {`${progressInPercents(currentGameRightAnswers, 10)}%`}
                </Typography>
            </Box>
        </Box>
    )
}
