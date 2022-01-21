import { NavLink } from "react-router-dom"

const Step_2 = props => {
    const setValue = (e) => {
        if (e.target.value === '<tbody></tbody>') {
            props.setValue(
                <table>
                    <tbody></tbody>
                </table>
            )
        }
    }
    return (
        <div>
            <input type="text" onChange={setValue} spellcheck="false" />
            <NavLink to='../step_3'>Step 3</NavLink>
        </div>
    )
}
export default Step_2;