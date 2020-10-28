import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import user from "./actions/user"
import plan from "./actions/plan"
import profile from "./actions/profile"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers ({
    user,
    plan,
    profile
})

const configureStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}

export default configureStore