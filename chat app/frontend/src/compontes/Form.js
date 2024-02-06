import { useState } from "react"
import Login from './Login'
import Signup from "./Signup"

const Form = () => {
    const [data, setData] = useState(true)
    let chnge = () => {
        data ? setData(false) : setData(true)
    }
    return (
        <>
            {!data ? <Login chnge={chnge} /> : <Signup chnge={chnge} />}
        </>
    )
}
export default Form