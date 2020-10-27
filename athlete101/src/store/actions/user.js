import {apiUrl} from "../../config"

export const TOKEN_KEY = "TOKEN_KEY";
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const SET_CURRENT_USER = "SET_CURRENT_USER"
//////////////////////////////////////////////////////////////////
export const setToken = (token) => {
    return {type: SET_TOKEN, token}
}

export const removeToken = () => {
    return {
        type:REMOVE_TOKEN
    }
}

export const setCurrentUser = (userId) => {
    return {
        type:SET_CURRENT_USER,
        userId
    }
}
//////////////////////////////////////////////////////////////////
export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
            dispatch(setToken(token))
    }
}

export const login = (email, password) => async (dispatch) => {
    const response = await fetch(`${apiUrl}/user`, 
    {method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })}
    );

    if (response.ok) {
        const { token, userId } = await response.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        dispatch(setToken(token));
        dispatch(setCurrentUser(userId))
      }
}

export const logout = () => async (dispatch, getState) => {
    const {user:{token}} = getState();
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());
}
//////////////////////////////////////////////////////////////////
export default function reducer (state ={}, action) {
    switch(action.type) {
        case SET_TOKEN:
            return {...state, token:action.token}

        case REMOVE_TOKEN:
            const newState = {...state}
            delete newState.token;
            return newState
        
        case SET_CURRENT_USER:
            return {...state, currentUser:action.userId}

        default :
            return state
    }
}