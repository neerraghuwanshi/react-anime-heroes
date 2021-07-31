import axios from 'axios'

import { 
    setSearchLoading,
    setSearchLoadingMore,
    setSearchError,
    setSearchData,
    setMoreSearchData,
    setIsMoreSearchData,
    setSearchPage,
    setCancelToken,
} from "./search"


export const fetchAnimes = (query, isNewQuery) => {
    return async (dispatch, getState) => {
        
        let cancelToken = getState().search.cancelToken
        let page = getState().search.page
        let isMoreSearchData = getState().search.isMoreSearchData

        if (cancelToken !== null){
            cancelToken.cancel('Request Cancelled')
        }

        cancelToken = axios.CancelToken.source()
        dispatch(setCancelToken(cancelToken))

        if (isMoreSearchData || isNewQuery){
            if (isNewQuery){
                page = 1
                dispatch(setSearchLoading())
            }
            else{
                dispatch(setSearchLoadingMore())
            }

            try {
                const response = await axios.get(
                    `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`,{
                    cancelToken: cancelToken.token
                })
                if (isNewQuery){
                    dispatch(setSearchData(response.data.results))
                }
                else{
                    dispatch(setMoreSearchData(response.data.results))
                }

                dispatch(setSearchPage(page+1))

                if (page === response.data.last_page){
                    dispatch(setIsMoreSearchData(false))
                }
                else{
                    dispatch(setIsMoreSearchData(true))
                }
            }
            catch (error) {
                if (error.message !== 'Request Cancelled'){
                    dispatch(setSearchError())
                }
            }
        }
    }
}