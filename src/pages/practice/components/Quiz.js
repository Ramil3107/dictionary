import { Box, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setCounter } from "../../../redux/dictionarySlice"

export const Quiz = () => {

    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            mt: 15
        }
    }

    const { randomWords, counter } = useSelector(state => state.dictionary)
    const dispatch = useDispatch()

    const handleNextButton = () => {
        return dispatch(setCounter())
    }

    return (
        <Box sx={styles.wrapper}>
            <Typography variant="h3">{randomWords[counter].en}</Typography>
            <Button onClick={handleNextButton} >Next</Button>
        </Box>
    )
}
