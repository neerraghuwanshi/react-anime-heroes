export const SET_SEARCH_LOADING = 'SET_SEARCH_LOADING'
export const SET_SEARCH_LOADING_MORE = 'SET_SEARCH_LOADING_MORE'
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR'
export const SET_SEARCH_DATA = 'SET_SEARCH_DATA'
export const SET_MORE_SEARCH_DATA = 'SET_MORE_SEARCH_DATA'
export const SET_SEARCH_PAGE = 'SET_SEARCH_PAGE'
export const SET_IS_MORE_SEARCH_DATA = 'SET_IS_MORE_SEARCH_DATA'

export const setSearchLoading = () => {
    return {
        type: SET_SEARCH_LOADING,
    }
}

export const setSearchLoadingMore = () => {
    return {
        type: SET_SEARCH_LOADING_MORE,
    }
}

export const setSearchError = () => {
    return {
        type: SET_SEARCH_ERROR,
    }
}

export const setSearchData = (data) => {
    return {
        type: SET_SEARCH_DATA,
        data,
    }
}

export const setMoreSearchData = (data) => {
    return {
        type: SET_MORE_SEARCH_DATA,
        data,
    }
}

export const setSearchPage = (page) => {
    return {
        type: SET_SEARCH_PAGE,
        page,
    }
}

export const setIsMoreSearchData = (isMoreSearchData) => {
    return {
        type: SET_IS_MORE_SEARCH_DATA,
        isMoreSearchData,
    }
}