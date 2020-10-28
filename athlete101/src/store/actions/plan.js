import {apiUrl} from "../../config"

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
    switch(action.type) {
        case GRAB_ALL_PLANS: {
            return {...state, topPlanList:action.list}
        }

        default: return state
    }
}