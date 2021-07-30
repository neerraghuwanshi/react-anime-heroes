import { 
    SET_ANIME_LOADING,
    SET_ANIME_ERROR,
    SET_ANIME_DATA,
} from '../actions/anime'


const initialState = {
    loading: true,
    error: false,
    data: null,
}

export const animeReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_ANIME_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                data: null,
            }
        case SET_ANIME_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                data: null,
            }
        case SET_ANIME_DATA:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.data,
            }
        default:
            return state
    }
}


