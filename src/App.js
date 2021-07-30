import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { store } from './store'
import HomeSearchBar from './components/HomeSearchBar'
import Home from './components/Home'
import Anime from './components/Anime'
import Default from './components/Default'
import Wrapper from './components/Wrapper'
import Search from './components/Search'


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <HomeSearchBar/>
                <Wrapper>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/search/:anime">
                            <Search />
                        </Route>
                        <Route exact path="/anime/:id">
                            <Anime />
                        </Route>
                        <Route>
                            <Default />
                        </Route>
                    </Switch>
                </Wrapper>
            </BrowserRouter>
        </Provider>
    )
}


export default App