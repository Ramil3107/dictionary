import { createSlice } from "@reduxjs/toolkit";
import { shuffleArray } from "../utils/arrayUtils";

const initialState = {
    words: [
        {
            "en": "dog",
            "uk": "собака"
        },
        {
            "en": "table",
            "uk": "стіл"
        },
        {
            "en": "cat",
            "uk": "кішка"
        },
        {
            "en": "sky",
            "uk": "небо"
        },
        {
            "en": "cloud",
            "uk": "хмара"
        },
        {
            "en": "goal",
            "uk": "ціль"
        },
        {
            "en": "forest",
            "uk": "ліс"
        },
        {
            "en": "house",
            "uk": "дім"
        },
        {
            "en": "pain",
            "uk": "біль"
        },
        {
            "en": "floor",
            "uk": "підлога"
        }
    ],
    isPracticeStarted: false,
    randomWords: [],
    randomAnswers: [],
    currentGameRightAnswers: 0,
    counter: 0,
    historyPrevLength: 0,
    history: [
        {
            rightAnswers: 7,
            date: "Sat Oct 01 2022 01:25"
        },
        {
            rightAnswers: 8,
            date: "Mon Oct 05 2022 01:25"
        },
        {
            rightAnswers: 10,
            date: "Fri Oct 01 2022 01:25"
        },
    ]
}

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        addWord: (state, action) => {
            state.words.push(action.payload)
        },
        setIsPracticeStarted: (state, action) => {
            state.isPracticeStarted = action.payload
        },
        setNewHistory: (state, action) => {
            state.history.push(action.payload)
        },
        setHistoryPrevLength: (state) => {
            state.historyPrevLength = state.history.length
        },
        removePrevQuizState: (state) => {
            state.randomWords = []
            state.randomAnswers = []
            state.currentGameRightAnswers = 0
            state.counter = 0
        },
        setRandomWords: (state) => {
            state.randomWords = shuffleArray(state.words, 10)
        },
        setRandomAnswers: (state) => {
            if (state.counter < 10) {
                const mixedAnswers = []
                mixedAnswers.push(state.randomWords[state.counter])
                state.randomWords.map((word, index) => {
                    if (index !== state.counter) {
                        mixedAnswers.push(word)
                    }
                })
                state.randomAnswers = shuffleArray(mixedAnswers.slice(0, 4), 4)
            }
        },
        addCurrentGameRightAnswers: (state) => {
            if (state.counter < 10) {
                state.currentGameRightAnswers += 1
            }
        },
        setCounter: (state) => {
            if (state.counter < 10) {
                state.counter += 1
            }
        }
    }
})

export const {
    addWord, setIsPracticeStarted, setRandomAnswers,
    setRandomWords, addCurrentGameRightAnswers, removePrevQuizState,
    setNewHistory, setCounter, setHistoryPrevLength } = dictionarySlice.actions
export default dictionarySlice.reducer