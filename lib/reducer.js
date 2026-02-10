import { useReducer } from "react"

export const initialState = {
    count: 0,
    loading: false,
    error: null
}
export const loadState = {
    color: "green",
    loading: false,
    count: 0,
    error: null
}
export function reducerr(state, action) {
    switch (action.type) {
        case "colorChange":
            return {
                ...state,
                color:state.color=== "green"?"red":"green",
                loading: false,
                error: null
            }
        case "increment":
            return {
                ...state,
                loading:false,
                count:state.count+1,
                error:null,
            } 
        case "decrement":
            return {
                ...state,
                loading:false,
                count:state.count-1,
                error:null
            } 
        case "loading":
            return {
                ...state,
                loading:true,
                count,
                color,
                error:null
            }
        case "fail":
            return {
                ...state,
                color:"red",
                count:0,
                error:action.payload
            } 
        case "reset":
            return {
                ...state,
                color:"yellow"
            }                 
    }
}
export function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1,
                loading: false,
                error: null
            }
        case "reset":
            return initialState
        case "fail":
            return {
                ...state,
                count:0,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}