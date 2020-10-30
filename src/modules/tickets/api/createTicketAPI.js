import {TICKETS_ENDPOINT} from "../constants/endpoints";

export function CreateTicketAPI(body) {
    return () => {
        return fetch(TICKETS_ENDPOINT,{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
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