import {apiUrl} from "../../config"


export const GET_EXERCISES = "GET_EXERCISES"

//////////////////////

export const getExercises = (list) => {
   return {
         type:GET_EXERCISES,
         list
        }

}


////////////////////////////////

export const getExercisesFunction = () => async(dispatch) => {
    const response =await fetch(`${apiUrl}/exercise/all`)
    const data = await response.json()
    dispatch(getExercises(data))
}




//////////////////////////////

////////////////////////////////
export default function reducer (state=[], action) {
    Object.freeze(state);
    switch(action.type) {
        case(GET_EXERCISES):
            return action.list
        default:
            return state;
    }
}

