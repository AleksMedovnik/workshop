

const Step_1 = props => {
    const setValue = (e) => {
        if (e.target.value === '<table></table>') {
            props.setValue(<table></table>)
            props.addNextStep('Ты молодец!', '../step_2', 'Step 2')
        }
    }
    return (
        <div>
            <input type="text" onChange={setValue} spellcheck="false" />
            <div>{props.nextStep}</div>
        </div>
    )
}
export default Step_1;