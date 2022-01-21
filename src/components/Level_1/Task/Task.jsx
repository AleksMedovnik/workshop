import { Route, Routes } from "react-router-dom";
import Step_1_HOC from "./steps/step_1/Step_1_HOC";
import Step_2_HOC from "./steps/step_2/Step_2_HOC";
import Step_3_HOC from "./steps/step_3/Step_3_HOC";
import Step_4_HOC from "./steps/step_4/Step_4_HOC";
import Step_5_HOC from "./steps/step_5/Step_5_HOC";

const Task = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Step_1_HOC />} />
                <Route path='step_2' element={<Step_2_HOC />} />
                <Route path='step_3' element={<Step_3_HOC />} />
                <Route path='step_4' element={<Step_4_HOC />} />
                <Route path='step_5' element={<Step_5_HOC />} />
            </Routes>
        </div>
    )
}
export default Task;