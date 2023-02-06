import { useDispatch } from "react-redux"
import { calculate, erase, number, operator } from "../../features/calculatorSlice"
import style from "./style.module.css"


export default function Key({ value, type }) {
    const dispatch = useDispatch()

    const onClick = () => {
        if(value === "C" && type=== "operator"){
            dispatch(erase())
        }else if(value === "=" && type=== "operator"){
            dispatch(calculate(value))
        } else if (type === "operator") {
            dispatch(operator(value));
          } else {
            dispatch(number(value))
        }
    }
    return (
        <>
            <button onClick={onClick} className={style.key} >
                {value} 
            </button>
        </>
    )
}