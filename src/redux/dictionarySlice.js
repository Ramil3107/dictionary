import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api/api";

//Store

const initialState = {
    words: null,
    loading: true
}

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        setWords: (state, action) => {
            state.words = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

//Thunks

export const getWords = createAsyncThunk(
    "dictionary/getWords",
    async (_, { dispatch }) => {
        try {
            dispatch(setLoading(true))
            const data = await API.getWords()
            dispatch(setWords(data))
            dispatch(setLoading(false))
        }
        catch (error) {
            alert(error.message)
            dispatch(setLoading(false))
        }
    }
)

export const { setWords, setLoading } = dictionarySlice.actions
export default dictionarySlice.reducer