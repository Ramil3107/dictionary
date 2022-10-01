import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import translateLogo from "../../assets/translateLogo.png"


export const Logo = () => {

    const styles = {
        logo: {
            cursor: "pointer",
            flexWrap: "wrap",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            pb: 2,
            pt: 2,
            mb: 3,
            borderBottom: "0.5px grey solid"
        },
        logoImg: {
            width: 45,
            height: 45
        },
        logoText: {
            maxWidth: 100
        }
    }

    const navigate = useNavigate()

    return (
        <Box
            onClick={() => navigate("mydictionary")}
            sx={styles.logo}>
            <img
                style={styles.logoImg}
                src={translateLogo}
            />
            <Typography
                variant="h5"
                sx={styles.logoText}>
                Dictionary
            </Typography>
        </Box>
    )
}
