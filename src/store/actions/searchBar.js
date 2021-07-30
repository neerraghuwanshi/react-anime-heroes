export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

export const setSearchTerm = (searchTerm) => {
    return {
        type: SET_SEARCH_TERM,
        searchTerm,
    }
}