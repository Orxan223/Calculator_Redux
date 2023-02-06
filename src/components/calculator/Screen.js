
import { useSelector } from "react-redux"
import style from "./style.module.css"
export default function Screen() {
    const {left,right,operator,result} = useSelector((state) => {
        return state.saygac
    })

    if(result !== null){
        return <div className={style.screen}>{result}</div>;
    }
    return (
        <>
            <div className={style.screen}>
                {left} {operator} {right}
            </div>
        </>
    )
}