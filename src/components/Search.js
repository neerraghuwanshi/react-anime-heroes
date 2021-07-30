import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom"
import Loader from "react-loader-spinner"

import AnimeCards from './AnimeCards'
import CentredText from './CentredText'
import CentredLoader from './CentredLoader'
import styles from '../css/Search.module.css'
import { fetchAnimes } from '../store/actions/searchFunctions'


export default function Search(){

    const dispatch = useDispatch()

    const { state } = useLocation()

    const showMoreButtonClickHandler = () => {
        dispatch(fetchAnimes(state.searchTerm))
    }

    const animes = useSelector(state => state.search.data)
    const loading = useSelector(state => state.search.loading)
    const loadingMore = useSelector(state => state.search.loadingMore)
    const error = useSelector(state => state.search.error)
    const isMoreSearchData = useSelector(state => state.search.isMoreSearchData)

    useEffect(() => {
        if (state){
            dispatch(fetchAnimes(state.searchTerm, true))
        }
    }, [dispatch, state])

    return (
        <div className={styles.container}>

            {loading && 
            <CentredLoader />}

            {error &&
            <CentredText text='Something Went Wrong' />}

            {!loading && !error && animes &&
            <>    
                <AnimeCards animes={animes}/>
                {loadingMore ?
                <div className={styles.moreDataLoaderContainer}>
                    <Loader 
                        type="BallTriangle"
                        color="white" 
                        height={80} 
                        width={80} /> 
                </div> :
                isMoreSearchData && 
                <button
                    className={styles.button}
                    onClick={showMoreButtonClickHandler}>
                    Show More
                </button>}
            </>}

        </div>
    )
}