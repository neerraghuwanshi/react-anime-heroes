import { useLocation } from "react-router-dom"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styles from '../css/Anime.module.css'
import CentredLoader from './CentredLoader'
import { fetchAnime } from '../store/actions/animeFunctions'
import CentredText from './CentredText'


export default function Anime(){

    const dispatch = useDispatch()

    const { state } = useLocation()

    const anime = useSelector(state => state.anime.data)
    const loading = useSelector(state => state.anime.loading)
    const error = useSelector(state => state.anime.error)

    useEffect(() => {
        dispatch(fetchAnime(state.malId))
    }, [dispatch, state])
    
    return (
        <div className={styles.container}>

            {loading && 
            <CentredLoader/>}

            {error &&
            <CentredText text='Something Went Wrong' />}

            {!loading && !error && anime &&
            <>
                <img
                    className={styles.image}
                    src={anime.image_url}
                    alt={anime.title}/>

                <div className={styles.textContainer}>

                    <div className={styles.row}>
                        <h2 className={styles.key}>
                            Name
                        </h2>
                        <p className={styles.value}>
                            {anime.title ? anime.title: '-'}
                        </p>
                    </div>

                    <div className={styles.row}>
                        <h2 className={styles.key}>
                            Rank
                        </h2>
                        <p className={styles.value}>
                            {anime.rank ? anime.rank : '-'}
                        </p>
                    </div>

                    <div className={styles.row}>
                        <h2 className={styles.key}>
                            Popularity
                        </h2>
                        <p className={styles.value}>
                            {anime.popularity ? anime.popularity : '-'}
                        </p>
                    </div>

                    <div className={styles.row}>
                        <h2 className={styles.key}>
                            Duration
                        </h2>
                        <p className={styles.value}>
                            {anime.duration ? anime.duration : '-'}
                        </p>
                    </div>

                    <div className={styles.row}>
                        <h2 className={styles.key}>
                            Rating
                        </h2>
                        <p className={styles.value}>
                            {anime.rating ? anime.rating : '-'}
                        </p>
                    </div>

                    <div className={styles.row}>
                        <h2 className={styles.key}>
                            Aired
                        </h2>
                        <p className={styles.value}>
                            {anime.aired.string ? anime.aired.string : '-'}
                        </p>
                    </div>

                </div>
            </>}

        </div>
    )
}