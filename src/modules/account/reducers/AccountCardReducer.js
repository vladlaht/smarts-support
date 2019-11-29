const initialState = {
    profileName: "Vladislav Lahtarin"
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ACCOUNT_DETAILS" :
            return {
                ...state
            };
        default:
            return state
    }
}