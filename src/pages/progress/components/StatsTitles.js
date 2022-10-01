import { Box, Typography } from "@mui/material"

export const StatsTitles = () => {

    const styles = {
        titlesBox: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: -2
        },
        titles: {
            ml: 5,
            mr: 5,
            width: "95%",
            minHeight: 70,
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }
    }

    return (
        <Box sx={styles.titlesBox}>
            <Box sx={styles.titles}>
                <Typography color="text.secondary">Date</Typography>
                <Typography color="text.secondary">Right Answers</Typography>
                <Typography color="text.secondary">Wrong Answers</Typography>
            </Box>
        </Box>
    )
}
