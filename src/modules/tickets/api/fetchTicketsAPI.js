export function fetchTicketsAPI() {
    return () => {
        //return fetch(TICKETS_ENDPOINT,{
        return fetch("https://7c5d6a5f-5fcb-4b46-831b-88962da10bdc.mock.pstmn.io/tickets",{
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