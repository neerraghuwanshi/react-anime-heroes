import thunk from 'redux-thunk'
import { 
    createStore, 
    applyMiddleware, 
    combineReducers,
} from 'redux'

import { searchReducer } from './reducers/search'
import { animeReducer } from './reducers/anime'
import { searchBarReducer } from './reducers/searchBar'


const reducer = combineReducers({
    search : searchReducer,
    anime : animeReducer,
    searchBar : searchBarReducer,
})

export const store = createStore(
    reducer, 
    applyMiddleware(thunk)
)