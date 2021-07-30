import { 
    SET_SEARCH_TERM,
} from '../actions/searchBar';


const initialState = {
    searchTerm: '',
}

export const searchBarReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.searchTerm,
            }
        default:
            return state
    }
}


