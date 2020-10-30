import {OPEN_PROFILE_ACTION} from "../constants/reducerConstants";
import {ACTION_STATUS_FORM_FIELD_CHANGE, getAction} from "../../../global/constants/action-types";

const initialState = {
    modalIsOpen: false
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case getAction(OPEN_PROFILE_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        default:
            return state
    }
}
