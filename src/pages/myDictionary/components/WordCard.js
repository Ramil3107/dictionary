import { Close, Delete } from "@mui/icons-material"
import { Divider, IconButton, Paper, Typography } from "@mui/material"
import { blue, green, grey } from "@mui/material/colors"

export const WordCard = ({ word }) => {

    const styles = {
        wrapper: {
            width: 300,
            height: 200,
            m: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around"
        },
        divider: {
            color: "grey",
            width: "80%"
        },
        word: {
            color: blue[800]
        },
        translate: {
            color: green[300]
        },
        deleteIcon: {
            alignSelf: "flex-end",
            mr: 2,
            mb: -7
        }
    }

    return (
        <Paper
            elevation={3}
            sx={styles.wrapper}>
            <IconButton sx={{ alignSelf: "flex-end", mr: 2, mb: -7 }}>
                <Close color="action" />
            </IconButton>
            <Typography
                sx={styles.word}
                variant="h4" >
                {word.en}
            </Typography>
            <Divider
                variant="middle"
                orientation="horizontal"
                sx={styles.divider} />
            <Typography
                sx={styles.translate}
                variant="h4">
                {word.uk}
            </Typography>

        </Paper>
    )
}