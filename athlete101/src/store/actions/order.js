import {apiUrl} from "../../config"



const CREATE_ORDER = "CREATE_ORDER";

////////////////////////////////////

const createOrder = () => {
    return {
        type:CREATE_ORDER,
    }
}

////////////////////////////////////
export const createOrderFunction = (currentPlanId)=> async (dispatch) => {
    const currentUserId = window.localStorage.getItem("currentUserId")
    const response = await fetch(`${apiUrl}/order/create`, {
        method: "post",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({currentPlanId, currentUserId})
    })

}

export const grabAllOrders = (currentUserId) => async (dispatch) => {
    const response =await fetch(`${apiUrl}/order/all`,{
        method:"put",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({currentUserId})
    })
    if (response.ok) {
        const orders = await response.json();
        console.log(orders)
    }
}