/* import { Textfit } from "react-textfit" */
import "./screen.css"

const Screen = ({ value }) => {
    return (
        <div className="screen" mode="single" max={70}>
            {/* {value.map(item => {
                return <a>{item[0]}</a>;
            })} */}
            {value.join('')}
        </div>
    )
}

export default Screen