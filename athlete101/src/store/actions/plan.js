import {apiUrl} from "../../config"
import merge from "lodash/merge";
import {TOKEN_KEY} from "./user"

export const GRAB_ALL_PLANS = "GRAB_ALL_PLANS";
export const CREATE_PLAN = "CREATE_PLAN"
export const CURRENT_PLAN_ID = "CurrentPlanId"
export const GRAB_ONE_PLAN = "GRAB_ONE_PLAN"
/////////////////////////////////////////////////

export const grabAllPlans = (list) => {
    return {
        type: GRAB_ALL_PLANS,
        list
    }
}

export const grabOnePlan = (viewPlan) => {
    return {
        type: GRAB_ONE_PLAN,
        viewPlan
    }
}


export const createPlan = (data) => {
    return {
        type:CREATE_PLAN,
        data
    }
}

/////////////////////////////////////////////////
export const grabOnePlanFunction = (id) => async(dispatch) => {
    const response = await fetch (`${apiUrl}/plan/${id}`);
    const plan = await response.json();
    // console.log(plan)
    dispatch(grabOnePlan(plan))
}
//plan's owner info: name, year, about me.
//category name
//exercise associating the plan with pictures.





export const createPlanFuction = (data) => async(dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY)
    const userId = window.localStorage.getItem("currentUserId")
    const newData = {...data, userId}
 
    const response = await fetch(`${apiUrl}/plan/create`,{
        method: "post",
        headers: {
            "Content-Type" : "application/json",

            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newData)
    })
    if(response.ok) {
        const {id} = await response.json()
       window.localStorage.setItem(CURRENT_PLAN_ID, id)
    }
}




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
        case GRAB_ALL_PLANS: 
            // return {...state, topPlanList:action.list}
            const list= action.list.map((each) => ({[each.id]: each}));
            return merge({},state,...list)
        
        case GRAB_ONE_PLAN:

            return {...state, viewPlan:action.viewPlan}
        

        

        default: return state
    }
}