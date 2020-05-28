import {TICKETS_ENDPOINT} from "../constants/endpoints";

export function fetchTicketsAPI() {
    return () => {
        return fetch(TICKETS_ENDPOINT,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            switch (res.status) {
                case 200:
                    return res.json();
                case 401:
                    throw new Error("Permission denied");
                default:
                    throw Error("Something went wrong");
            }
        })
    }
}