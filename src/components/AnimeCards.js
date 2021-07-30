import styles from '../css/AnimeCards.module.css'
import AnimeCard from './AnimeCard'


export default function HeroCards(props) {

    const { animes } = props

    return (
        <div className={styles.container}>
            {
                animes && animes.map((anime) => (
                    <AnimeCard
                        key={anime.mal_id}
                        malId={anime.mal_id}
                        imageUrl={anime.image_url}
                        title={anime.title}/>
                ))
            }
        </div>
    )
}