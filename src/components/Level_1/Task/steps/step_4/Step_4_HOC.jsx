import { connect } from "react-redux";
import Step_4 from "./Step_4";
import { setValue } from "../../../../../store/reducers/level_1_Red";

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {setValue})(Step_4);