import { useSelector } from "react-redux"
import { Quiz } from "./components/Quiz"
import { StartPractice } from "./components/StartPractice"


export const Practice = () => {

    const isPracticeStarted = useSelector(state => state.dictionary.isPracticeStarted)

    return (
        <>
            {!isPracticeStarted && <StartPractice />}
            {isPracticeStarted && <Quiz />}
        </>
    )
}