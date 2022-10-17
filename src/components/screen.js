/* import { Textfit } from "react-textfit" */
import "./screen.css"

const Screen = (props) => {  
    return (
        <div className="screen" mode="single" max={70}>
            {props.value}
        </div>
    )
}


export default Screen