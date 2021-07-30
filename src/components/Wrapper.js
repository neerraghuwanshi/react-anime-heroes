import styles from '../css/Wrapper.module.css'


export default function HomeSearchBar(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}