import { useSelector } from "react-redux"
import { Quiz } from "./components/Quiz"
import { StartPractice } from "./components/StartPractice"


export const Practice = () => {

    const { isPracticeStarted, randomWords, randomAnswers, counter, words } = useSelector(state => state.dictionary)

    return (
        <>
            {!isPracticeStarted && <StartPractice words={words} />}
            {isPracticeStarted && <Quiz
                randomWords={randomWords}
                randomAnswers={randomAnswers}
                counter={counter} />}
        </>
    )
}