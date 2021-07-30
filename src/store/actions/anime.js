export const SET_ANIME_LOADING = 'SET_ANIME_LOADING'
export const SET_ANIME_ERROR = 'SET_ANIME_ERROR'
export const SET_ANIME_DATA = 'SET_ANIME_DATA'

export const setAnimeLoading = () => {
    return {
        type: SET_ANIME_LOADING,
    }
}

export const setAnimeError = () => {
    return {
        type: SET_ANIME_ERROR,
    }
}

export const setAnimeData = (data) => {
    return {
        type: SET_ANIME_DATA,
        data,
    }
}