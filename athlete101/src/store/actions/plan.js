import {apiUrl} from "../../config"
import merge from "lodash/merge";


export const GRAB_ALL_PLANS = "GRAB_ALL_PLANS";

/////////////////////////////////////////////////

export const grabAllPlans = (list) => {
    return {
        type: GRAB_ALL_PLANS,
        list
    }
}

/////////////////////////////////////////////////
export const grabTopList = () => async (dispatch) => {
        const response = await fetch(`${apiUrl}/plan/top`);
        if(response.ok) {
            const list = await response.json();
            dispatch(grabAllPlans(list))
        }

} 

//////////////////////////////////////////////////////

export default function reducer (state ={}, action) {
    Object.freeze(state);
    switch(action.type) {
        case GRAB_ALL_PLANS: {
            // return {...state, topPlanList:action.list}
            const list= action.list.map((each) => ({[each.id]: each}));
            return merge({},state,...list)

        }

        default: return state
    }
}