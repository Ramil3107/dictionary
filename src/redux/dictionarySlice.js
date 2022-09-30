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
    counter: 0
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
        setRandomWords: (state) => {
            state.randomWords = shuffleArray(state.words, 10)
        },
        setCounter: (state) => {
            if (state.counter < 9) {
                state.counter += 1
            }
        }
    }
})

export const { addWord, setIsPracticeStarted, setRandomWords, setCounter } = dictionarySlice.actions
export default dictionarySlice.reducer