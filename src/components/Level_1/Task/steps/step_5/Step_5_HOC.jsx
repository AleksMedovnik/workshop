import { connect } from "react-redux";
import Step_5 from "./Step_5";
import { setValue } from "../../../../../store/reducers/level_1_Red";

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {setValue})(Step_5);