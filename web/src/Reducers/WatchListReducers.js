import {GET_NUMBERS_TO_WATCHLIST, ADD_PRODUCT_TO_WATCHLIST, REMOVE_PRODUCT_FROM_WATCHLIST} from "../Actions/types";
import axios from "axios";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    WatchListitems:[],
    show: false
}

export default (state = initialState, action) =>{
    const {payload} = action
    switch(action.type) {
        case ADD_PRODUCT_TO_WATCHLIST:

            if(payload.qty == 0){
                payload.qty =1
            }

            axios({
                url: 'http://localhost:5000/cart/WatchList',
                method: 'post',
                data: payload
            })
                .then(function (response) {
                    // your action after success
                    console.log(response);
                })
                .catch(function (error) {
                    // your action on error success
                    console.log(error);
                });

            return {
                ...state,
                backetNumbers: state.backetNumbers + 1,
                cartCost: state.cartCost + (action.payload.price * action.payload.qty),
                WatchListitems: [
                    ...state.WatchListitems,
                    {...payload}
                ]
            }

        case GET_NUMBERS_TO_WATCHLIST:
            return {
                backetNumbers: state.backetNumbers + 1
            }

        case REMOVE_PRODUCT_FROM_WATCHLIST:
                return {
                    ...state,
                    ...state.items,
                    backetNumbers: state.backetNumbers - 1,
                    WatchListitems: state.WatchListitems.filter((item, index) => index !== action.payload.name),
                    cartCost: state.cartCost - payload.price
                }

        default:
            return state;
    }

}























