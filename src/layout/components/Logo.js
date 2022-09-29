import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import translateLogo from "../../assets/translateLogo.png"


export const Logo = () => {

    const navigate = useNavigate()

    const styles = {
        logo: {
            cursor: "pointer",
            flexWrap: "wrap",
            display: "flex",
            alignItems: "center",
            pl: 5,
            pb: 3,
            pt: 3,
            mb: 5,
            borderBottom: "0.5px grey solid"
        },
        logoImg: {
            width: 45,
            height: 45
        },
        logoText: {
            ml: 2,
            maxWidth: 100
        },
    }

    return (
        <Box
            onClick={() => navigate("/")}
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
