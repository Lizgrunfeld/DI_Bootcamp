import { DECREMENT, INCREMENT } from "../actions";

let initState = {
    count: 0,
    history:[],
}

function handleChange(state, change){
    const {count, history} = state;
    return ({
        count: count + change,
        history: [count + change, ...history]
      })
    }


export const reducer = (state=initState, action={}) =>{
    const {count, history} = state;
    switch (action.type) {
        case INCREMENT:
                return handleChange(state, 1);
        case  DECREMENT:
            return handleChange(state, -1);
    default:
                return state;
 }
}