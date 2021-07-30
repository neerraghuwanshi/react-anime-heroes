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
        if (state){
            dispatch(fetchAnime(state.malId))
        }
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
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th className={styles.key}>
                                Name
                            </th>
                            <td className={styles.value}>
                                {anime.title ? anime.title: '-'}
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.key}>
                                Rank
                            </th>
                            <td className={styles.value}>
                                {anime.rank ? anime.rank : '-'}
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.key}>
                                Popularity
                            </th>
                            <td className={styles.value}>
                                {anime.popularity ? anime.popularity : '-'}
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.key}>
                                Duration
                            </th>
                            <td className={styles.value}>
                                {anime.duration ? anime.duration : '-'}
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.key}>
                                Rating
                            </th>
                            <td className={styles.value}>
                                {anime.rating ? anime.rating : '-'}
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.key}>
                                Aired
                            </th>
                            <td className={styles.value}>
                                {anime.aired.string ? anime.aired.string : '-'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>}

        </div>
    )
}