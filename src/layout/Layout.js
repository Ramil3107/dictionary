import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Logo } from "./components/Logo"
import { NavItems } from "./components/NavItems"

export const Layout = () => {

    const styles = {
        wrapper: {
            display: "flex",
            minHeight: "100vh"
        },
        navBar: {
            width: "18%",
            minWidth: 120,
            border: "0.5px grey solid",
            borderBottom: "0px",
            borderLeft: "0px",
            borderTop: "0px"
        }
    }

    return (
        <Box sx={styles.wrapper}>

            <Paper
                elevation={0}
                square
                sx={styles.navBar}
            >
                <Logo />
                <NavItems />
            </Paper>

            <Box sx={{ width: "82%" }}>
                <Outlet/>
            </Box>


        </Box >
    )
}