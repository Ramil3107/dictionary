import { useSelector } from "react-redux"
import { Box, Divider } from "@mui/material";
import { Words } from "./components/Words"
import { NavButtons } from "./components/NavButtons"

export const MyDictionary = () => {

    const styles = {
        wrapper: {
            width: "100%"
        },
        dividereBox: {
            display: "flex",
            justifyContent: "center",
            mt: 5
        }
    }

    const words = useSelector(state => state.dictionary.words)

    return (
        <Box sx={styles.wrapper}>
            <NavButtons />
            <Box sx={styles.dividereBox}>
                <Divider
                    orientation="horizontal"
                    variant="middle"
                    sx={{ width: "70%" }} />
            </Box>
            <Words words={words} />
        </Box>
    )
}
