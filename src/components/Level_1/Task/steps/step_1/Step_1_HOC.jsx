import { connect } from "react-redux";
import Step_1 from "./Step_1";
import { setValue, addNextStep } from "../../../../../store/reducers/level_1_Red";

const mapStateToProps = state => {
    return {
        nextStep: state.level_1.nextStep
    }
}

export default connect(mapStateToProps, {setValue, addNextStep})(Step_1);