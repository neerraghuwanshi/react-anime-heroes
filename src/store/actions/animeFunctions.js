import axios from 'axios'

import { 
    setAnimeLoading,
    setAnimeError,
    setAnimeData,
} from './anime'


export const fetchAnime = (query) => {
    return async (dispatch) => {
        try {
            dispatch(setAnimeLoading())
            const response = await axios.get(`https://api.jikan.moe/v3/anime/${query}`)
            dispatch(setAnimeData(response.data))
        } catch (error) {
            dispatch(setAnimeError())
        }
    }
}