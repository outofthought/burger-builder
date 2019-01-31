import {
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_BURGER_FAILED,
    PURCHASE_BURGER_START,
    PURCHASE_INIT,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAIL
} from '../action-types'
const initialState={
    orders:[],
    loading:false,
    purchased:false
}

const orderReducer=(state=initialState,action)=>{
    switch(action.type){
        case PURCHASE_BURGER_SUCCESS:
        const orderData={
            ...action.orderData,
            id:action.orderId
        }
        return{
            ...state,
            loading:false,
            orders:state.orders.concat(orderData),
            purchased:true
           
        }
        case PURCHASE_BURGER_FAILED:
        return{
            ...state,
            loading:false

        }
        case PURCHASE_BURGER_START:
        return{
            ...state,
            loading:true
            }
            case PURCHASE_INIT:
            return{
                ...state,
                purchased:false

            }
        case FETCH_ORDERS_START:
        return{
            ...state,
            loading:true

        }  
        case FETCH_ORDERS_SUCCESS:
        return{
            ...state,
            orders:action.orders,
            loading:false

        }  
        case FETCH_ORDERS_FAIL:
        return{
            ...state,
            loading:false

        }
        default:
        return state

    }
    
}
export default orderReducer