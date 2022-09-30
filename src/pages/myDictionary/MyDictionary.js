import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CenteredLoader } from "../../common/CenteredLoader/CenteredLoader"
import { getWords } from "../../redux/dictionarySlice"
import { WordCard } from "./components/WordCard"
import { Words } from "./components/Words"

export const MyDictionary = () => {

    const dispatch = useDispatch()
    const words = useSelector(state => state.dictionary.words)

    useEffect(() => {
        dispatch(getWords())
    }, [])

    return (
        <>
            {words && <Words words={words} />}

            {!words && <CenteredLoader />}
        </>
    )
}
