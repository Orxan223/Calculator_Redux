import { createSlice } from "@reduxjs/toolkit";




export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        right: [],
        left: [],
        operator: null,
        result: null
    },
    reducers: {
        erase: (state) => {
            state.right = [];
            state.left = [];
            state.operator = null;
            state.result = null
        },
        calculate: (state) => {
            let left = state.left.join("")
            let right = state.right.join("")
            let result = null
            switch(state.operator){
                case "X":
                    result = left * right
                    break
                case "/":
                    result = left / right
                    break
                case "+":
                    result = left + right
                    break
                case "-":
                    result = left - right
                    break
                default:
                    return state

            }
            state.result = result
        },
        operator: (state,action) => {
            state.operator = action.payload
        },
        number: (state, action) => {
            const left = [...state.left]
            const right = [...state.right]
            if (state.operator === null) {
                left.push(action.payload)
            } else {
                right.push(action.payload)
            }
            return {
                ...state,
                left,
                right
            }
        }
    }
})

export const { erase, calculate, operator, number } = calculatorSlice.actions
export default calculatorSlice.reducer