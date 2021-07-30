import { Link } from 'react-router-dom'
import styles from '../css/AnimeCard.module.css'


export default function AnimeCard(props) {

    const { imageUrl, title, malId } = props

    return (
        <Link
            className={styles.link}
            to={{
                pathname: `/anime/${malId}`,
                state: { malId },
            }}>
            <img
                className={styles.image} 
                src={imageUrl} 
                alt={title}/>
            <div 
                className={styles.titleContainer}>
                <h2 className={styles.title}>
                    {title}
                </h2>
            </div>
        </Link>
    )
}