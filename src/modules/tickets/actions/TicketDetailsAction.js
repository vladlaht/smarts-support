export function getDetails(actionType, field, value) {
    return (dispatch) => dispatch({
        type: actionType,
        payload: {field: field, value: value}
    })
}