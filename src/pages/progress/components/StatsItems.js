import { Box, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"

export const StatsItems = ({ history }) => {

    const styles = {
        historyItemsBox: {
            display: "flex",
            justifyContent: "center",
            width: "100%"
        },
        historyItemBox: {
            mt:2,
            width: "95%",
            minHeight: 70,
            backgroundColor: blue[50],
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }
    }

    return (
        <Box sx={{width:"100%", mb:5}}>
            {
                history.map(item => {
                    return (
                        <Box sx={styles.historyItemsBox}>
                            <Box sx={styles.historyItemBox}>
                                <Typography sx={{ pl: 2 }}>{item.date}</Typography>
                                <Typography sx={{ pr: 25 }}>{item.rightAnswers}</Typography>
                                <Typography sx={{ pr: 5 }}>{10 - item.rightAnswers}</Typography>
                            </Box>
                        </Box>
                    )
                })
            }

        </Box>
    )
}
