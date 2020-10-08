import {UPDATE_ACCOUNT_ACTIVITY_ACTION} from "../constants/ReducerConstants";

const initialState = {
    userDetails: {
        id: null,
        email: "vlad.laht@gmail.com",
        firstName: "Vladislav",
        lastName: "Lahtarin",
        fullName: "Vladislav Lahtarin",
        phoneNumber: "+372 55667788",
        location: "Tallinn, EE",
        photo: `${process.env.PUBLIC_URL}/img/profile_photo.png`
    },
    userActivities: [
        {
            dateTime: "Sep 1 2020 00:02:48 GMT+0300",
            actionType: "has closed ticket",
            ticketNumber: "#581d171e89e81e1"
        },
        {
            dateTime: "May 3 2020 00:02:48 GMT+0300",
            actionType: "edited ticket",
            ticketNumber: "#5g15rw42wer251"
        },
        {
            dateTime: "Oct 4 2020 00:02:48 GMT+0300",
            actionType: "added comment to the ticket",
            ticketNumber: "#56hwq5t216g61"
        },
        {
            dateTime: "Jun 6 2020 00:02:48 GMT+0300",
            actionType: "created ticket",
            ticketNumber: "#5q15g6ru4uh64w"
        }
    ],
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ACCOUNT_ACTIVITY_ACTION:
            return {
                ...state,
                userActivities: [...state.userActivities,
                    {
                        dateTime: new Date(),
                        actionType: action.payload.actionType,
                        ticketNumber: action.payload.ticketNumber
                    }]
            }
                ;
        default:
            return state
    }
}
