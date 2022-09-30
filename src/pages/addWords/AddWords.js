import { ArrowCircleDown } from "@mui/icons-material"
import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addWord } from "../../redux/dictionarySlice"


export const AddWords = () => {

    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            mt: 15
        },
        textField: {
            width: "60%",
            maxWidth: 500,
            mb: 5,
            mt: 5
        },
        icon: {
            fontSize: 60
        }
    }

    const [word, setWord] = useState("")
    const [translate, setTranslate] = useState("")
    const [wordError, setWordError] = useState(false)
    const [translateError, setTranslateError] = useState(false)
    const dispatch = useDispatch()



    const handleSubmit = (e) => {
        e.preventDefault()
        setWordError(false)
        setTranslateError(false)

        if (!word) {
            setWordError(true)
        }
        if (!translate) {
            setTranslateError(true)
        }
        if (word && translate) {
            let completeWord = {
                en: word,
                uk: translate
            }
            dispatch(addWord(completeWord))
            setWord("")
            setTranslate("")
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={styles.wrapper}
        >
            <TextField
                sx={styles.textField}
                label="Write an English word"
                variant="outlined"
                value={word}
                error={wordError}
                onChange={(e) => setWord(e.target.value)}
            />
            <ArrowCircleDown sx={styles.icon} />
            <TextField
                sx={styles.textField}
                label="Впишіть переклад слова"
                variant="outlined"
                value={translate}
                error={translateError}
                onChange={(e) => setTranslate(e.target.value)}
            />
            <Button
                variant="contained"
                color="info"
                type="submit">
                Add Word
            </Button>
        </Box>
    )
}