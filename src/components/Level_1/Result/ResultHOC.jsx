import { connect } from "react-redux";
import Result from "./Result";

const mapStateToProps = state => {
    return {
        table: state.level_1.table
    }
}

export default connect(mapStateToProps, {})(Result);