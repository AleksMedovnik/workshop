import { connect } from "react-redux";
import Step_3 from "./Step_3";
import { setValue } from "../../../../../store/reducers/level_1_Red";

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {setValue})(Step_3);