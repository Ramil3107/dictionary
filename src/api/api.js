import axios from "axios";

const instance = axios.create({
    baseURL: "https://633621fa65d1e8ef2668ae09.mockapi.io/words"
})

export const API = {
    getWords: async () => {
        const response = await instance.get()
        return response.data
    }
}