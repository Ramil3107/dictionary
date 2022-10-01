import { Check, Close, Visibility } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"


export const TotalStats = ({ history }) => {

    const styles = {
        statsBox: {
            mt: 5,
            ml: 4,
            borderRadius: 15,
            width: "30%",
            minWidth: 250,
            minHeight: 250,
            backgroundColor: "rgb(250 240 225)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        },
        icon: {
            mt: 4,
            mb: 3
        },
        data: {
            mt: 5
        }
    }

    const totalRightAnswers = (history) => {
        let counter = 0
        history.map(item => {
            counter += item.rightAnswers
        })
        return counter
    }

    const totalStatsData = [
        {
            icon: <Visibility sx={styles.icon} fontSize="large" />,
            title: "Total Practices",
            data: history.length
        },
        {
            icon: <Check sx={styles.icon} fontSize="large" />,
            title: "Total Right Answers",
            data: totalRightAnswers(history)
        },
        {
            icon: <Close sx={styles.icon} fontSize="large" />,
            title: "Total Wrong Answers",
            data: history.length * 10 - totalRightAnswers(history)
        },
    ]

    return (
        <>
            {
                totalStatsData.map(item => {
                    return (
                        <Box sx={styles.statsBox}>
                            {item.icon}
                            <Typography color="text.secondary">{item.title}</Typography>
                            <Typography sx={styles.data} variant="h3">{item.data}</Typography>
                        </Box>
                    )
                })
            }

        </>
    )
}
