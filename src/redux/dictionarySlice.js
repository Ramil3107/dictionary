import { createSlice } from "@reduxjs/toolkit";

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
    loading: true
}

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        addWord: (state, action) => {
            state.words.push(action.payload)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { addWord, setLoading } = dictionarySlice.actions
export default dictionarySlice.reducer