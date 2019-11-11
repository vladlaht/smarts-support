export function getAction(action, status = null) {
    if(!status) {
        return action;
    }
    return action+"_"+status;
}

export const ACTION_STATUS_FAILED  = "FAILED";
export const ACTION_STATUS_START  = "START";
export const ACTION_STATUS_SUCCESS = "SUCCESS";
export const ACTION_STATUS_FORM_FIELD_CHANGE = "FORM_FIELD_CHANGE";
export const ACTION_STATUS_FORM_CLEAR_ERRORS = "FORM_CLEAR_ERRORS";
export const ACTION_STATUS_SET_ACTIVE = "SET_ACTIVE";
export const ACTION_STATUS_CLEAR_ALL = "CLEAR_ALL";
export const ACTION_STATUS_RESET = "ACTION_STATUS_RESET";


