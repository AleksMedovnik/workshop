import { NavLink } from "react-router-dom";

const TABLE = 'table';
const NEXT_STEP = 'nextStep';

const initialState = {
    table: '',
    nextStep: ''
}

const level_1_Red = (state = initialState, action) => {
    switch (action.type) {
        case TABLE:
            return { ...state, table: action.value }
        case NEXT_STEP:
            return {
                ...state,
                nextStep:
                    <div>
                        <b>{action.title}</b>
                        <NavLink to={action.href}>{action.content}</NavLink>
                    </div>
            }
    }
    return state;
}

export const setValue = (value) => ({ type: TABLE, value })
export const addNextStep = (title, href, content) => ({ type: NEXT_STEP, title, href, content })
export default level_1_Red