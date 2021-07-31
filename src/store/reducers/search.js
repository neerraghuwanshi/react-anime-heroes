import { 
    SET_SEARCH_LOADING,
    SET_SEARCH_LOADING_MORE,
    SET_SEARCH_ERROR,
    SET_SEARCH_DATA,
    SET_MORE_SEARCH_DATA,
    SET_SEARCH_PAGE,
    SET_IS_MORE_SEARCH_DATA,
    SET_CANCEL_TOKEN,
} from '../actions/search';


const initialState = {
    loading: true,
    loadingMore: false,
    error: false,
    data: null,
    page: 1,
    isMoreSearchData: false,
    cancelToken: null,
}

export const searchReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_SEARCH_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                data: null,
            }
        case SET_SEARCH_LOADING_MORE:
            return {
                ...state,
                loadingMore: true,
                error: false,
            }
        case SET_SEARCH_ERROR:
            return {
                ...state,
                loading: false,
                loadingMore: false,
                error: true,
                data: null,
            }
        case SET_SEARCH_DATA:
            return {
                ...state,
                loading: false,
                loadingMore: false,
                error: false,
                data: action.data,
            }
        case SET_MORE_SEARCH_DATA:
            return {
                ...state,
                loading: false,
                loadingMore: false,
                error: false,
                data: [...state.data, ...action.data],
            }
        case SET_SEARCH_PAGE:
            return {
                ...state,
                page: action.page
            }
        case SET_IS_MORE_SEARCH_DATA:
            return {
                ...state,
                isMoreSearchData: action.isMoreSearchData
            }
        case SET_CANCEL_TOKEN:
            return {
                ...state,
                cancelToken: action.cancelToken
            }
        default:
            return state
    }
}


