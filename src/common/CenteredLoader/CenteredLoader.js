import { Box } from "@mui/material"
import styles from "./CenteredLoader.module.css"


export const CenteredLoader = () => {
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div className={styles.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Box>
    )

}