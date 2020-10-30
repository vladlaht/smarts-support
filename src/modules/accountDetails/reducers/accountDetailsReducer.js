import {UPDATE_ACCOUNT_ACTIVITY_ACTION} from "../constants/reducerConstants";

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
            actionType: "edited ticket",
            ticketNumber: "5ec1e2852e54c7392692457c"
        },
        {
            dateTime: "May 3 2020 00:02:48 GMT+0300",
            actionType: "edited ticket",
            ticketNumber: "5ec1e2d82e54c7392692457d"
        },
        {
            dateTime: "Oct 4 2020 00:02:48 GMT+0300",
            actionType: "edited ticket",
            ticketNumber: "5ec27aabd159332e5bc2cd4d"
        },
        {
            dateTime: "Jun 6 2020 00:02:48 GMT+0300",
            actionType: "created ticket",
            ticketNumber: "5ec27a73d159332e5bc2cd49"
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
