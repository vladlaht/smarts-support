import {TICKETS_ENDPOINT} from "../constants/endpoints";

export function CreateTicketAPI(body) {
    return (dispatch, getState) => {
        // const activeUser = getState().activeUser;
        // let accessToken = fetchAccessTokenFromActiveUser(activeUser);
        // if(!accessToken) {
        //     dispatch(accountSignOut());
        //     return Promise.resolve();
        // }
        return fetch(TICKETS_ENDPOINT,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer "
                    // + accessToken
            },
            body: JSON.stringify(body)
        }).then(res => {
            switch (res.status) {
                case 200:
                    return res.json();
                case 401:
                    //dispatch(accountSignOut());
                    throw new Error("Permission denied");
                default:
                    throw Error("Something went wrong");
            }
        })
   }
}