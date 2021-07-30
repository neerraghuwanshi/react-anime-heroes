import axios from 'axios'

import { 
    setSearchLoading,
    setSearchLoadingMore,
    setSearchError,
    setSearchData,
    setMoreSearchData,
    setIsMoreSearchData,
    setSearchPage,
} from "./search"


export const fetchAnimes = (query, isNewQuery) => {
    return async (dispatch, getState) => {

        let page = getState().search.page
        let isMoreSearchData = getState().search.isMoreSearchData

        if (isNewQuery){
            page = 1
        }

        if (isMoreSearchData || isNewQuery){
            if (isNewQuery){
                dispatch(setSearchLoading())
            }
            else{
                dispatch(setSearchLoadingMore())
            }

            try {
                const response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`)
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
                dispatch(setSearchError())
            }
        }
    }
}