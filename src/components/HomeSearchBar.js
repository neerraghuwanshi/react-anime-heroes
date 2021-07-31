import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

import { setSearchTerm } from '../store/actions/searchBar'
import styles from '../css/HomeSearchBar.module.css'


export default function HomeSearchBar() {
    
    const dispatch = useDispatch()

    const history = useHistory()

    const searchTerm = useSelector(state => state.searchBar.searchTerm)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (searchTerm !== ''){
            history.push({
                pathname: `/search/${searchTerm}`,
                state: { searchTerm },
            })
            dispatch(setSearchTerm(''))
            const searchBar = event.target.children[0]
            searchBar.blur()
        }
    }

    const SetSearchTerm = (event) => {
        dispatch(setSearchTerm(event.target.value))
    }

    return (
        <form
            className={styles.container} 
            onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="Search for an anime"
                className={styles.searchBar}
                value={searchTerm}
                onChange={SetSearchTerm}/>
            <button
                type="submit"
                className={styles.button}>
                Go
            </button>
        </form>
    )
}